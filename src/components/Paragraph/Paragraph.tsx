import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

type ParagraphProps = PropTypes.InferProps<typeof propTypes>;

const Paragraph: React.FC<ParagraphProps> = ({ title, children }) => {
  return (
    <>
      {title && <Heading>{title}</Heading>}
      {children && <Content $hasTitle={!!title}>{children}</Content>}
    </>
  );
};

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = {
  title: undefined,
  children: null
};

// Styled components below
const Heading = styled.h2`
  ${tw`p-3 text-2xl font-medium`}
`;

interface ContentProps {
  $hasTitle: boolean;
}

const Content = styled.p(({ $hasTitle }: ContentProps) => [
  tw`font-normal text-base text-spacestagram-darkgray whitespace-pre-line`,
  $hasTitle ? tw`px-3 pb-3` : tw`p-3`
]);

export default Paragraph;
