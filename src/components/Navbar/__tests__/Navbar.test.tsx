import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from '..';

afterEach(cleanup);

describe('Navbar component', () => {
  it('renders a navbar', () => {
    const { getByTestId, getAllByTestId } = render(<Navbar />);
    const NavbarContainer = getByTestId('navbar_title');
    expect(NavbarContainer).not.toBeNull();
    expect(NavbarContainer).toBeVisible();
    const NavbarLink = getAllByTestId('icon-link')[0];
    expect(NavbarLink).not.toBeNull();
    expect(NavbarLink).toBeVisible();
  });
});
