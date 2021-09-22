import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loader from '..';

afterEach(cleanup);

describe('Loader component', () => {
  it('renders a loader', () => {
    const { getByTestId } = render(<Loader />);
    const InputLoader = getByTestId('loader');
    expect(InputLoader).not.toBeNull();
    expect(InputLoader).toBeVisible();
  });
});
