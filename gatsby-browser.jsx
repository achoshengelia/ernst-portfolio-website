import React from 'react';
import Layout from 'components/Layout/Layout';
import { GlobalContextProvider } from './src/context/GlobalContext';
import { pages } from './src/constants/global';

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location);
  const prevLocation = prevRouterProps?.location;

  const isLanguageChange =
    (!location.pathname.includes('it') &&
      prevLocation?.pathname.includes('it')) ||
    (location.pathname.includes('it') &&
      !prevLocation?.pathname.includes('it'));

  const isIndexPage =
    !location?.pathname.includes(pages.imprint) &&
    !location?.pathname.includes(pages.privacy);

  if (isLanguageChange || isIndexPage) {
    return false;
  }

  return window.scrollTo(...(currentPosition || [0, 0]));
};

export const wrapPageElement = ({ element }) => {
  if (!element.props.children?.props) return;
  const newElement = React.cloneElement(
    element, // I18nextProvider
    element.props,
    React.cloneElement(
      element.props.children, // I18nextContext.Provider
      element.props.children.props,
      React.createElement(
        Layout,
        undefined,
        element.props.children.props.children
      )
    )
  );

  return newElement;
};

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
