import React from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

import IconButton from '@/components/IconButton';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/" passHref>
          <Title data-testid="navbar_title">Spacestagram</Title>
        </Link>
        <Buttons>
          <IconButton
            fill
            icon="search"
            href="/search"
            ariaLabel="Go to Search page"
          />
          <IconButton
            fill
            icon="user"
            href="/liked"
            ariaLabel="Go to Profile page"
          />
        </Buttons>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  ${tw`sticky top-0 z-10 bg-white border-b border-solid border-gray-300`}
`;

const Wrapper = styled.div`
  ${tw`relative flex items-center justify-between h-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`}
`;

const Title = styled.a`
  ${tw`text-2xl xs:text-3xl font-semibold`}
`;

const Buttons = styled.div`
  ${tw`flex space-x-3`}
`;

export default Navbar;
