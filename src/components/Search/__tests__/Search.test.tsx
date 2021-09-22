import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Search from '..';

afterEach(cleanup);

describe('Search component', () => {
  it('renders search', () => {
    const { getByTestId } = render(<Search onSearch={() => {}} />);
    const SearchContainer = getByTestId('search_container');
    expect(SearchContainer).not.toBeNull();
    expect(SearchContainer).toBeVisible();
    const SearchWarning = getByTestId('search_warning');
    expect(SearchWarning).not.toBeNull();
    expect(SearchWarning).toBeVisible();
    const SearchButton = getByTestId('button');
    expect(SearchButton).not.toBeNull();
    expect(SearchButton).toBeVisible();
    expect(SearchButton.innerHTML).toBe('Search for Post');
  });

  describe('behavior', () => {
    it('calls onSearch handler', () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Search onSearch={mockFn} />);
      const SearchButton = getByTestId('button');
      fireEvent.click(SearchButton);
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
