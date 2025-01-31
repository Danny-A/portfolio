import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Heading from './Heading';

describe('Heading', () => {
  it('renders with default props', () => {
    render(<Heading>Hello World</Heading>);
    const heading = screen.getByText('Hello World');
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('font-heading', 'text-3xl', 'text-primary');
  });

  it('renders with custom heading level', () => {
    render(<Heading as="h1">Title</Heading>);
    const heading = screen.getByText('Title');
    expect(heading.tagName).toBe('H1');
  });

  it('applies custom size and color variants', () => {
    render(
      <Heading size="xl" color="secondary">
        Custom Heading
      </Heading>
    );
    const heading = screen.getByText('Custom Heading');
    expect(heading).toHaveClass('text-xl', 'text-secondary');
  });

  it('merges custom className', () => {
    render(
      <Heading className="custom-class">
        With Custom Class
      </Heading>
    );
    const heading = screen.getByText('With Custom Class');
    expect(heading).toHaveClass('custom-class');
  });
}); 