import React from 'react';
import Head from 'next/head';
import tw, { styled } from 'twin.macro';
import { useMediaQuery } from 'react-responsive';

import Navbar from '@/components/Navbar';

type Props = {
  title?: string;
  column?: React.ReactNode;
  children?: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({
  title = 'This is the default title',
  column,
  children
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Image-sharing from the final frontier."
        />
        <link rel="shortcut icon" type="image/png" href="favicon.png" />
        <link rel="prefetch" href="fonts/styles.css" as="style" />
        <link
          rel="prefetch"
          href="fonts/Roobert-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="prefetch"
          href="fonts/Roobert-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="prefetch"
          href="fonts/Roobert-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <Columns>
        {isMobile ? (
          <>
            <Aside>{column}</Aside>
            <Content>{children}</Content>
          </>
        ) : (
          <>
            <Content>{children}</Content>
            <Aside>{column}</Aside>
          </>
        )}
      </Columns>
    </>
  );
};

const Columns = styled.main`
  ${tw`max-w-xl lg:max-w-5xl mt-4 flex flex-col lg:grid lg:grid-cols-5 lg:gap-x-10 post:mx-auto`}
`;

const Content = styled.div`
  ${tw`flex flex-col max-w-xl lg:col-span-3 mb-8`}
`;

const Aside = styled.div`
  ${tw`max-w-xl lg:max-w-full lg:col-span-2`}
`;

export default Layout;
