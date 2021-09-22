import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import IconButton from '..';

afterEach(cleanup);

describe('IconButton component', () => {
  it('renders an icon button', () => {
    const { getByTestId } = render(<IconButton icon="heart" />);
    const InputButton = getByTestId('icon-button');
    expect(InputButton).not.toBeNull();
    expect(InputButton).toBeVisible();
  });

  describe('behavior', () => {
    it('calls onClick handler', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <IconButton icon="heart" onClick={mockFn} />
      );
      const InputButton = getByTestId('icon-button');
      fireEvent.click(InputButton);
      expect(mockFn).toHaveBeenCalled();
    });

    it('renders an anchor', () => {
      const { getByTestId } = render(<IconButton icon="heart" href="/" />);
      const InputLink = getByTestId('icon-link');
      expect(InputLink).not.toBeNull();
      expect(InputLink).toBeVisible();
    });
  });
});
