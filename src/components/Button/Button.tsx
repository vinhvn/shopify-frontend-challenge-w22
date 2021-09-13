import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const propTypes = {
  outline: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

type ButtonProps = PropTypes.InferProps<typeof propTypes>;

const Button: React.FC<ButtonProps> = ({
  outline,
  block,
  onClick,
  children
}) => {
  return (
    <Container type="button" outline={outline} block={block} onClick={onClick}>
      {children}
    </Container>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = {
  outline: false,
  block: false
};

// Styled components below
type ContainerProps = {
  outline?: boolean | null;
  block?: boolean | null;
};

const Container = styled.button(({ outline, block }: ContainerProps) => [
  tw`px-5 py-1 rounded-xl font-semibold border-2 border-spacestagram-primary transition-colors duration-200 focus:outline-none focus:ring focus:border-spacestagram-secondary`,
  outline
    ? tw`bg-white text-spacestagram-primary`
    : tw`bg-spacestagram-primary text-white`,
  block ? tw`w-full` : ''
]);

export default Button;
