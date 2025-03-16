import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  // ✅ Test 1: Check if the component is visible
  test('renders the Label component', () => {
    render(<Label text="Sample Label" />);
    expect(screen.getByText('Sample Label')).toBeInTheDocument();
  });

  // ✅ Test 2: Check if the label changes color when disabled
  test('applies a greyed-out color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText('Disabled Label');
    expect(labelElement).toHaveStyle('color: #ccc'); // Update based on your styled-components CSS
  });
});
