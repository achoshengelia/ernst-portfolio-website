import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { LineBreak } from 'components/Global';
import { MainWrapperStyled } from './LayoutStyles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapperStyled>{children}</MainWrapperStyled>
      <LineBreak />
      <Footer />
    </>
  );
};

export default Layout;
