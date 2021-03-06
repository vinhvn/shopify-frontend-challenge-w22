import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import {
  HeartOutlined,
  HeartFilled,
  LinkOutlined,
  UserOutlined,
  SearchOutlined,
  ExportOutlined
} from '@ant-design/icons';

const propTypes = {
  icon: PropTypes.oneOf([
    'heart',
    'heartOutline',
    'link',
    'user',
    'search',
    'export'
  ]).isRequired,
  fill: PropTypes.bool,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func
};

type IconButtonProps = PropTypes.InferProps<typeof propTypes>;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  fill,
  href,
  ariaLabel,
  onClick
}) => {
  const Icon = () => {
    const sizeStyle = {
      fontSize: fill ? '20px' : '28px'
    };
    switch (icon) {
      case 'heart':
        return <HeartFilled style={sizeStyle} tw="animate-like" />;
      case 'heartOutline':
        return <HeartOutlined style={sizeStyle} />;
      case 'link':
        return <LinkOutlined style={sizeStyle} />;
      case 'user':
        return <UserOutlined style={sizeStyle} />;
      case 'search':
        return <SearchOutlined style={sizeStyle} />;
      case 'export':
        return <ExportOutlined style={sizeStyle} />;
      default:
        return <>Invalid Icon</>;
    }
  };
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledLink
          aria-label={ariaLabel !== null ? ariaLabel : undefined}
          $fill={fill}
          data-testid="icon-link"
        >
          <Icon />
        </StyledLink>
      </Link>
    );
  }
  return onClick ? (
    <StyledButton
      type="button"
      aria-label={ariaLabel !== null ? ariaLabel : undefined}
      $fill={fill}
      onClick={onClick}
      data-testid="icon-button"
    >
      <Icon />
    </StyledButton>
  ) : null;
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = {
  fill: false,
  href: undefined,
  ariaLabel: undefined,
  onClick: () => {}
};

// Styled components below
type StyleProps = {
  $fill?: boolean | null;
};

const StyledButton = styled.button(({ $fill }: StyleProps) => [
  tw`w-8 h-8 flex justify-center items-center rounded-full font-semibold cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring focus:border-spacestagram-secondary`,
  $fill
    ? tw`bg-spacestagram-primary text-white border hover:bg-spacestagram-secondary`
    : tw`bg-transparent text-spacestagram-primary hover:text-spacestagram-secondary`
]);

const StyledLink = StyledButton.withComponent('a');

export default IconButton;
