import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from 'context/GlobalContext';
import defaultTheme from './default';
import GlobalStyles from '../GlobalStyles';

const Theme = ({ children }) => {
  const { showLanding } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles showLanding={showLanding} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
