import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import tw, { styled, TwStyle } from 'twin.macro';

import Layout from '@/components/Layout';

const Container = styled.div`
  ${tw`absolute inset-0 w-full h-screen flex flex-col justify-center items-center`}
`;

const Title = styled.h1`
  ${tw`text-4xl sm:text-5xl font-semibold tracking-wide mb-12`}
`;

const linkStyles: Record<string, TwStyle> = {
  red: tw`text-red-500 hover:text-red-700`,
  yellow: tw`text-yellow-500 hover:text-yellow-700`,
  green: tw`text-green-500 hover:text-green-700`,
  blue: tw`text-blue-500 hover:text-blue-700`,
  indigo: tw`text-indigo-500 hover:text-indigo-700`,
  purple: tw`text-purple-500 hover:text-purple-700`
};
const Link = styled.a(({ color }) => [
  tw`block md:inline font-semibold transition-colors duration-300`,
  color && linkStyles[color]
]);

const IndexPage: NextPage = () => {
  const [title, setTitle] = useState('Querying...');

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch('api/hello');
      const data = await res.json();
      setTitle(data.title);
    };
    fetchApi();
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Container>
        <Title>{title}</Title>
        <div tw="text-xl space-y-4 md:space-x-4">
          <span>Learn</span>
          <Link color="red" href="https://reactjs.org/">
            React
          </Link>
          <Link color="yellow" href="https://nextjs.org/docs">
            Next.js
          </Link>
          <Link color="green" href="https://tailwindcss.com">
            Tailwind CSS
          </Link>
          <Link color="blue" href="https://github.com/ben-rogerson/twin.macro">
            Twin.macro
          </Link>
          <Link color="indigo" href="https://styled-components.com">
            Styled Components
          </Link>
          <Link color="purple" href="https://typescriptlang.org">
            TypeScript
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
