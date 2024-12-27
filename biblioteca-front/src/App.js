// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Library from './pages/Bibliteca';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Library />
    </ThemeProvider>
  );
}

export default App;