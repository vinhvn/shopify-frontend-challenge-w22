import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Image from '..';

afterEach(cleanup);

describe('Image component', () => {
  it('renders image', () => {
    const { getByTestId } = render(<Image src="/favicon.png" />);
    const ImageContainer = getByTestId('image_container');
    expect(ImageContainer).not.toBeNull();
    expect(ImageContainer).toBeVisible();
    const ImageContent = getByTestId('image_content');
    expect(ImageContent).not.toBeNull();
    expect(ImageContent).toBeVisible();
  });
});
