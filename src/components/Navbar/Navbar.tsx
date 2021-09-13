import React from 'react';
import tw, { styled } from 'twin.macro';
import IconButton from '@/components/Button/IconButton';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Spacestagram</Title>
        <ButtonsContainer>
          <IconButton fill icon="search" href="/search" />
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  ${tw`sticky top-0 z-10 bg-white border-b border-solid border-gray-300`}
`;

const Wrapper = styled.div`
  ${tw`relative flex items-center justify-between h-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
`;

const Title = styled.h1`
  ${tw`text-3xl font-semibold`}
`;

const ButtonsContainer = styled.div`
  ${tw`flex space-x-4`}
`;

export default Navbar;
