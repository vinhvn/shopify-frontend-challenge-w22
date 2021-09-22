import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '..';

afterEach(cleanup);

describe('Button component', () => {
  it('renders a button', () => {
    const { getByTestId } = render(<Button>Click me</Button>);
    const InputButton = getByTestId('button');
    expect(InputButton).not.toBeNull();
    expect(InputButton).toBeVisible();
  });

  describe('behavior', () => {
    it('calls onClick handler', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Button onClick={mockFn}>Click me</Button>
      );
      const InputButton = getByTestId('button');
      fireEvent.click(InputButton);
      expect(mockFn).toHaveBeenCalled();
    });

    it('renders a disabled button', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Button onClick={mockFn} disabled>
          Click me
        </Button>
      );
      const InputButton = getByTestId('button');
      fireEvent.click(InputButton);
      expect(mockFn).not.toHaveBeenCalled();
    });
  });
});
