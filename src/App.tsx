import React from 'react';
import { GlobalStyle } from './global/styles';
import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from './global/theme';
import { Routes } from './routes/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
