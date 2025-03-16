import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('renders the text correctly', () => {
    render(<Text content="Hello World" />);
    const textElement = screen.getByText('Hello World');
    expect(textElement).toBeInTheDocument();
  });

  test('applies custom styles', () => {
    render(<Text content="Styled Text" size="20px" color="blue" />);
    const textElement = screen.getByText('Styled Text');
    expect(textElement).toHaveStyle('font-size: 20px');
    expect(textElement).toHaveStyle('color: blue');
  });

  test('checks that the component is visible', () => {
    const { getByText } = render(<Text content="Visible" />);
    expect(getByText('Visible')).toBeVisible();
  });

  test('checks that the color changed when disabled', () => {
    render(<Text content="Disabled Text" disabled={true} />);
    const textElement = screen.getByText('Disabled Text');
    expect(textElement).toHaveStyle('color: rgb(204, 204, 204);');
  });
});
