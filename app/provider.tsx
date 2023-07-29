'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
