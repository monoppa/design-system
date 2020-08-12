import React, { ReactNode } from 'react';

interface EnvPageProps {}

const EnvPage: ReactNode = (): EnvPageProps => {
  return <div>{process.env.customKey}</div>;
};

export default EnvPage;
