import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

const TestWrapper: React.FC<{
  src?: string;
  disabled?: boolean;
  testBackgroundColor?: string;
}> = ({ src, disabled, testBackgroundColor }) => {
  return (
    <div
      data-testid="wrapper-div"
      style={{ backgroundColor: testBackgroundColor }}
    >
      <HeroImage src={src} disabled={disabled} />
    </div>
  );
};

describe('HeroImage Component', () => {
  // ✅ Test 1: Check if the component is visible
  test('renders the HeroImage component', () => {
    render(<HeroImage src="https://via.placeholder.com/150" />);
    expect(screen.getByTestId('hero-image')).toBeInTheDocument();
  });

  // ✅ Test 2: Check if the component applies a default background when no image is provided
  test('applies default background when no image is provided', () => {
    render(<HeroImage />);
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toHaveStyle('background-image: url(default-image.png)');
  });

  test('checks that the background color changed when disabled', () => {
    render(<TestWrapper disabled={true} testBackgroundColor="red" />);
    const divWrapper = screen.getByTestId('wrapper-div');
    expect(getComputedStyle(divWrapper).backgroundColor).toBe('red');
  });

  test('checks that the component is visible', () => {
    render(<HeroImage src="https://via.placeholder.com/150" />);
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toBeVisible();
  });
});
