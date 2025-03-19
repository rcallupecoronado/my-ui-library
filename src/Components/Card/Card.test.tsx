import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { omit } from 'lodash';

const TestWrapper: React.FC<{
  title: string;
  content: string;
  children?: React.ReactNode;
  testBackgroundColor?: string;
  testDisabled?: boolean;
  testTextColor?: string;
}> = ({
  title,
  content,
  testBackgroundColor,
  testDisabled,
  testTextColor,
  ...rest
}) => {
  const filteredProps = omit(rest, [
    'testBackgroundColor',
    'testDisabled',
    'testTextColor',
  ]);
  return (
    <Card
      title={title}
      content={content}
      backgroundColor={testBackgroundColor}
      disabled={testDisabled}
      textColor={testTextColor}
      {...filteredProps}
    />
  );
};

describe('Card Component', () => {
  test('renders the Card component with title and content', () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders children if provided', () => {
    render(
      <Card title="Test Title" content="Test Content">
        <button>Click Me</button>
      </Card>
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByRole('button').parentElement).toBeInTheDocument();
  });
  test('applies custom background color when provided', () => {
    render(
      <TestWrapper
        title="Test Title"
        content="Test Content"
        testBackgroundColor="lightblue"
      />
    );
    const cardElement = screen.getByRole('region');
    expect(getComputedStyle(cardElement).backgroundColor).toBe('lightblue');
  });

  test('checks that the component is disabled', () => {
    render(
      <TestWrapper
        title="Test Title"
        content="Test Content"
        testDisabled={true}
      />
    );
    const cardElement = screen.getByRole('region');
    expect(cardElement).toHaveStyle('opacity: 0.5');
    expect(cardElement).toHaveStyle('cursor: not-allowed');
  });

  test('applies custom text color when provided', () => {
    render(
      <TestWrapper
        title="Test Title"
        content="Test Content"
        testTextColor="darkblue"
      />
    );
    const cardElement = screen.getByRole('region');
    expect(getComputedStyle(cardElement).color).toBe('darkblue');
  });
});
