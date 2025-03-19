import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders the radio button', () => {
    render(
      <RadioButton
        label="Test Option"
        name="test"
        value="option1"
        checked={false}
        onChange={() => {
          // No-op for test
        }}
      />
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
  });

  test('calls onChange when clicked', () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        label="Test Option"
        name="test"
        value="option1"
        checked={false}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('should be checked when passed checked=true', () => {
    render(
      <RadioButton
        label="Checked Option"
        name="test"
        value="option2"
        checked={true}
        onChange={() => {
          // No-op for test
        }}
      />
    );

    expect(screen.getByRole('radio')).toBeChecked();
  });
});
