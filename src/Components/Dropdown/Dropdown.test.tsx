import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders the dropdown', () => {
    render(
      <Dropdown
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        onChange={jest.fn()}
        defaultValue=""
      />
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
