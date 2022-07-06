import React, { createContext, useState } from 'react';
import { isBrowser, pages } from 'constants/global';

export const GlobalContext = createContext({
  isIndexPage: true,
  showLanding: true,
  setShowLanding: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const isIndexPage =
    isBrowser &&
    !window.location?.pathname.includes(pages.imprint) &&
    !window.location?.pathname.includes(pages.privacy);
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
