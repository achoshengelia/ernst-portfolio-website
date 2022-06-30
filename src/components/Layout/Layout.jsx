import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { LineBreak } from 'styles/utils';
import Theme from '../../styles/themes/Theme';
import { MainWrapperStyled } from './LayoutStyles';

const Layout = ({ children }) => {
  return (
    <Theme>
      <Header />
      <MainWrapperStyled>{children}</MainWrapperStyled>
      <LineBreak />
      <Footer />
    </Theme>
  );
};

export default Layout;
