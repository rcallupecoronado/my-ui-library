import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with given label', () => {
    render(<Button label="Click Me" onClick={jest.fn()} disabled={false} />);
    expect(
      screen.getByRole('button', { name: 'Click Me' })
    ).toBeInTheDocument();
  });

  test('button should be disabled when disabled prop is true', () => {
    render(<Button label="Disabled" onClick={jest.fn()} disabled={true} />);
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled={false} />);
    fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('checks that the component is visible', () => {
    render(<Button label="Visible" onClick={jest.fn()} />);
    expect(screen.getByRole('button', { name: 'Visible' })).toBeVisible();
  });

  test('checks that the background color changed when disabled', () => {
    render(<Button label="Test" disabled={true} onClick={jest.fn()} />);
    expect(screen.getByRole('button', { name: 'Test' })).toHaveStyle(
      'background-color: rgb(204, 204, 204);'
    );
  });
});
