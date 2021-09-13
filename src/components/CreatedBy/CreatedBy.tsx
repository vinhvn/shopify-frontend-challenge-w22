import React from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const CreatedBy = () => {
  return (
    <Details>
      Created by{' '}
      <Link href="https://github.com/vinhvn" passHref>
        <DetailsLink>Vincent Nguyen</DetailsLink>
      </Link>{' '}
      with ☕
    </Details>
  );
};

const Details = styled.p`
  ${tw`px-3 py-2 text-xs text-spacestagram-darkgray`}
`;

const DetailsLink = styled.a`
  ${tw`transition-colors duration-200 ease-in-out text-spacestagram-primary hover:text-spacestagram-secondary`}
`;

export default CreatedBy;
