const React = require('react');
const Layout = require('./src/components/Layout/Layout').default;
const { GlobalContextProvider } = require('./src/context/GlobalContext');

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
