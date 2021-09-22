import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Paragraph from '..';

afterEach(cleanup);

describe('Paragraph component', () => {
  it('renders a paragraph', () => {
    const { getByTestId } = render(<Paragraph title="Title">Body</Paragraph>);
    const ParagraphHeader = getByTestId('paragraph_header');
    expect(ParagraphHeader).not.toBeNull();
    expect(ParagraphHeader).toBeVisible();
    expect(ParagraphHeader.textContent).toBe('Title');
    const ParagraphBody = getByTestId('paragraph_body');
    expect(ParagraphBody).not.toBeNull();
    expect(ParagraphBody).toBeVisible();
    expect(ParagraphBody.textContent).toBe('Body');
  });
});
