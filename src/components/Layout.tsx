import * as React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({
  title = 'This is the default title',
  children
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default Layout;
