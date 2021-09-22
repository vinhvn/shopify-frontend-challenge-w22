import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { HeartFilled } from '@ant-design/icons';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  liked: PropTypes.bool,
  onDoubleClick: PropTypes.func
};

type ImageProps = PropTypes.InferProps<typeof propTypes>;

const Image: React.FC<ImageProps> = ({ src, alt, liked, onDoubleClick }) => {
  return (
    <Container
      onDoubleClick={onDoubleClick || undefined}
      aria-label={liked ? 'Unlike photo' : 'Like photo'}
      data-testid="image_container"
    >
      <Content
        width={375}
        height={375}
        src={src}
        alt={alt !== null ? alt : 'Image'}
        data-testid="image_content"
      />
      <Icon $liked={liked} />
    </Container>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = {
  alt: undefined,
  liked: false,
  onDoubleClick: undefined
};

// Styled components below
const Container = styled.button`
  ${tw`flex justify-center items-center w-full bg-spacestagram-darkgray cursor-pointer focus:outline-none focus:ring focus:border-spacestagram-secondary`}
`;

const Content = styled.img`
  ${tw`w-auto max-h-image-sm`}
`;

interface IconProps {
  $liked: boolean | null | undefined;
}

const Icon = styled(HeartFilled)(({ $liked }: IconProps) => [
  tw`absolute inline-block text-9xl opacity-0 text-spacestagram-primary`,
  $liked && tw`animate-like duration-150`
]);

export default Image;
