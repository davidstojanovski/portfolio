import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../Theme/theme';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

export const Styling = ({ children }: { children: any }) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};
