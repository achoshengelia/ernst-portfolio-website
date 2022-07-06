const React = require('react');
const Layout = require('./src/components/Layout/Layout').default;
const { GlobalContextProvider } = require('./src/context/GlobalContext');
const { pages } = require('./src/constants/global');

exports.shouldUpdateScroll = ({
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

exports.wrapPageElement = ({ element }) => {
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

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
