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
      {title && <Heading data-testid="paragraph_header">{title}</Heading>}
      {children && (
        <Body $hasTitle={!!title} data-testid="paragraph_body">
          {children}
        </Body>
      )}
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

interface BodyProps {
  $hasTitle: boolean;
}

const Body = styled.p(({ $hasTitle }: BodyProps) => [
  tw`font-normal text-base text-spacestagram-darkgray whitespace-pre-line`,
  $hasTitle ? tw`px-3 pb-3` : tw`p-3`
]);

export default Paragraph;
