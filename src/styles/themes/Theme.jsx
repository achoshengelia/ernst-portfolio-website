import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from 'context/GlobalContext';
import GlobalStyles from '../GlobalStyles';
import defaultTheme from './default';

const Theme = ({ children }) => {
  const { showLanding, overflowHidden } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        showLanding={showLanding}
        overflowHidden={overflowHidden || showLanding}
      />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
