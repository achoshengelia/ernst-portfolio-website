import React, { createContext, useState } from 'react';
import { getIsIndexPage } from 'utils/fns';

export const GlobalContext = createContext({
  showLanding: true,
  setShowLanding: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [showLanding, setShowLanding] = useState(getIsIndexPage());

  const contextValue = {
    showLanding,
    setShowLanding
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
