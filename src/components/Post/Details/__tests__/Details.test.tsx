import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from '..';

afterEach(cleanup);

describe('Details component', () => {
  it('renders details', () => {
    const { getByTestId } = render(<Details text="this is a test" />);
    const DetailsContainer = getByTestId('details_container');
    expect(DetailsContainer).not.toBeNull();
    expect(DetailsContainer).toBeVisible();
    const DetailsBody = getByTestId('details_body');
    expect(DetailsBody).not.toBeNull();
    expect(DetailsBody).toBeVisible();
    expect(DetailsBody.textContent).toBe('this is a test');
    const DetailsExpandButton = getByTestId('details_expand-button');
    expect(DetailsExpandButton).not.toBeNull();
    expect(DetailsExpandButton).toBeVisible();
    const DetailsExpandIcon = getByTestId('details_expand-icon');
    expect(DetailsExpandIcon).not.toBeNull();
    expect(DetailsExpandIcon).toBeVisible();
  });
});
