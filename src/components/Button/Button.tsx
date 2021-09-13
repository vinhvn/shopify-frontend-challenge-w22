import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const propTypes = {
  outline: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

type ButtonProps = PropTypes.InferProps<typeof propTypes>;

const Button: React.FC<ButtonProps> = ({
  outline,
  block,
  disabled,
  onClick,
  children
}) => {
  return (
    <Container
      type="button"
      outline={outline}
      block={block}
      disabled={disabled !== null && disabled}
      $disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = {
  outline: false,
  block: false,
  disabled: false
};

// Styled components below
type ContainerProps = {
  outline?: boolean | null;
  block?: boolean | null;
  $disabled?: boolean | null;
};

const Container = styled.button(
  ({ outline, block, $disabled }: ContainerProps) => [
    tw`px-5 py-1 rounded-xl font-semibold border-2 border-spacestagram-primary transition-colors ease-in-out duration-200 hover:border-spacestagram-secondary focus:outline-none focus:ring focus:border-spacestagram-secondary`,
    outline
      ? tw`bg-white text-spacestagram-primary hover:text-spacestagram-secondary`
      : tw`bg-spacestagram-primary text-white hover:bg-spacestagram-secondary`,
    block ? tw`w-full` : '',
    $disabled ? tw`cursor-not-allowed` : tw`cursor-pointer`
  ]
);

export default Button;
