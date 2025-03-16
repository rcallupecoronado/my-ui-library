import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';
import { omit } from 'lodash';

const TestWrapper: React.FC<{
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  testBackgroundColor?: string;
}> = ({ src, alt, width, height, disabled, testBackgroundColor, ...rest }) => {
  const filteredProps = omit(rest, ['testBackgroundColor']);
  return (
    <Img
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={testBackgroundColor}
      {...filteredProps}
    />
  );
};

describe('Img Component', () => {
  // ... other tests

  test('applies custom background color when provided', () => {
    render(
      <TestWrapper
        src="https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg"
        alt="Sample Image"
        testBackgroundColor="red"
      />
    );
    const imgElement = screen.getByAltText('Sample Image');
    expect(getComputedStyle(imgElement).backgroundColor).toBe('red');
  });

  test('checks that the component is visible', () => {
    render(
      <Img
        src="https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg"
        alt="Sample Image"
      />
    );
    const imgElement = screen.getByAltText('Sample Image');
    expect(imgElement).toBeVisible();
  });

  test('checks that the component is disabled', () => {
    render(
      <Img
        src="https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg"
        alt="Sample Image"
        disabled={true}
      />
    );
    const imgElement = screen.getByAltText('Sample Image');
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
  });
});
