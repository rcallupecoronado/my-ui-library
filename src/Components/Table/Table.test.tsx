import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  const headers = ['Name', 'Age', 'Location'];
  const rows = [
    ['Alice', '25', 'New York'],
    ['Bob', '30', 'London'],
    ['Charlie', '35', 'Paris'],
  ];

  test('renders table correctly', () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('renders correct number of headers', () => {
    render(<Table headers={headers} rows={rows} />);
    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(headers.length);
  });

  test('renders correct number of rows', () => {
    render(<Table headers={headers} rows={rows} />);
    const rowElements = screen.getAllByRole('row');
    expect(rowElements.length).toBe(rows.length + 1); // Including header row
  });
});
