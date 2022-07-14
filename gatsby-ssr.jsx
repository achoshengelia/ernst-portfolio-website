import React from 'react';
import Layout from 'components/Layout/Layout';
import { GlobalContextProvider } from 'context/GlobalContext';

export const wrapPageElement = ({ element }) => {
  if (!element.props.children?.props) return null;
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
