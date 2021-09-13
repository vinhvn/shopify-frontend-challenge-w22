import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import {
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  UserOutlined,
  SearchOutlined
} from '@ant-design/icons';

const propTypes = {
  icon: PropTypes.oneOf(['heart', 'heartOutline', 'share', 'user', 'search'])
    .isRequired,
  fill: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func
};

type IconButtonProps = PropTypes.InferProps<typeof propTypes>;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  fill,
  href,
  onClick
}) => {
  const Icon = () => {
    const sizeStyle = {
      fontSize: fill ? '20px' : '28px'
    };
    switch (icon) {
      case 'heart':
        return <HeartFilled style={sizeStyle} />;
      case 'heartOutline':
        return <HeartOutlined style={sizeStyle} />;
      case 'share':
        return <ShareAltOutlined style={sizeStyle} />;
      case 'user':
        return <UserOutlined style={sizeStyle} />;
      case 'search':
        return <SearchOutlined style={sizeStyle} />;
      default:
        return <>Invalid Icon</>;
    }
  };
  if (href) {
    return (
      <StyledLink $fill={fill} href={href}>
        <Icon />
      </StyledLink>
    );
  }
  return onClick ? (
    <StyledButton type="button" $fill={fill} onClick={onClick}>
      <Icon />
    </StyledButton>
  ) : (
    <StyledButton type="button" $fill={fill}>
      <Icon />
    </StyledButton>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = {
  fill: false,
  href: undefined,
  onClick: () => {}
};

// Styled components below
type StyleProps = {
  $fill?: boolean | null;
};

const StyledButton = styled.button(({ $fill }: StyleProps) => [
  tw`w-8 h-8 flex justify-center items-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring focus:border-spacestagram-secondary`,
  $fill
    ? tw`bg-spacestagram-primary text-white`
    : tw`bg-transparent text-spacestagram-primary`
]);

const StyledLink = StyledButton.withComponent(Link);

export default IconButton;
