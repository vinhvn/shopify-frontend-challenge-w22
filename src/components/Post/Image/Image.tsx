import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

type ImageProps = PropTypes.InferProps<typeof propTypes>;

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Container>
      <Content
        width={375}
        height={375}
        src={src}
        alt={alt !== null ? alt : 'Image'}
      />
    </Container>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = {
  alt: undefined
};

// Styled components below
const Container = styled.div`
  ${tw`flex justify-center items-center w-full bg-spacestagram-darkgray`}
`;

const Content = styled.img`
  ${tw`w-auto max-h-image-sm`}
`;

export default Image;
