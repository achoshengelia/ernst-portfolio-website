import React, { createContext, useState } from 'react';
import { isBrowser } from 'constants/global';
import { getIsIndexPage } from 'utils/fns';

export const GlobalContext = createContext({
  overflowHidden: false,
  showLanding: true,
  setShowLanding: () => {},
  setOverflowHidden: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [overflowHidden, setOverflowHidden] = useState(false);
  const [showLanding, setShowLanding] = useState(getIsIndexPage());

  const contextValue = {
    overflowHidden,
    showLanding,
    setShowLanding,
    setOverflowHidden
  };

  if (!isBrowser) return null;

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
