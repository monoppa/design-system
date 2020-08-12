import React, { ReactNode } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

import '../styles/globals.css';

const MyApp: ReactNode = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
