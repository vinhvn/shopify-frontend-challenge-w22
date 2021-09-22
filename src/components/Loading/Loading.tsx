import React from 'react';
import tw, { styled } from 'twin.macro';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const Loading: React.FC = () => {
  return <Loader data-testid="loader" />;
};

// Styled components below
const Loader = styled(Loading3QuartersOutlined)`
  ${tw`w-8 h-8 flex justify-center items-center animate-spin text-3xl text-spacestagram-primary`}
`;

export default Loading;
