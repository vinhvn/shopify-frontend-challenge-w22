import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Post from '..';

afterEach(cleanup);

describe('Post component', () => {
  it('renders post', () => {
    const mockData = {
      title: 'test title',
      date: '09-21-2021',
      media_type: 'image',
      url: '/favicon.png',
      explanation: 'test explanation'
    };
    const { getByTestId } = render(<Post data={mockData} />);
    const PostContainer = getByTestId('post_container');
    expect(PostContainer).not.toBeNull();
    expect(PostContainer).toBeVisible();
    const PostTitle = getByTestId('post_title');
    expect(PostTitle).not.toBeNull();
    expect(PostTitle).toBeVisible();
    expect(PostTitle.innerHTML).toBe(mockData.title);
    const PostDate = getByTestId('post_date');
    expect(PostDate).not.toBeNull();
    expect(PostDate).toBeVisible();
    expect(PostDate.innerHTML).toBe(mockData.date);
  });
});
