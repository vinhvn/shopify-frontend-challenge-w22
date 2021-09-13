import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node
};

type ParagraphProps = PropTypes.InferProps<typeof propTypes>;

const Paragraph: React.FC<ParagraphProps> = ({ title, center, children }) => {
  return (
    <div>
      {title && <Heading>{title}</Heading>}
      {children && (
        <Content hasTitle={!!title} center={!!center}>
          {children}
        </Content>
      )}
    </div>
  );
};

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = {
  title: undefined,
  center: false,
  children: null
};

// Styled components below
const Heading = styled.h2`
  ${tw`p-3 text-2xl font-medium`}
`;

interface ContentProps {
  hasTitle: boolean;
  center: boolean;
}

const Content = styled.p(({ hasTitle, center }: ContentProps) => [
  tw`font-normal text-base text-spacestagram-darkgray whitespace-pre-line`,
  hasTitle ? tw`px-3 pb-3` : tw`p-3`,
  center ? tw`text-center` : 'text-left'
]);

export default Paragraph;
