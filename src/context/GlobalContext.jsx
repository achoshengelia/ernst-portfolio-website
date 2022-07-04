import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
  isIndexPage: true,
  showLanding: true,
  setShowLanding: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const isIndexPage =
    !window.location?.pathname.includes('imprint') &&
    !window.location?.pathname.includes('privacy');
  const [showLanding, setShowLanding] = useState(isIndexPage);

  const contextValue = {
    isIndexPage,
    showLanding,
    setShowLanding
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
