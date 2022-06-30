import React from 'react';
import { HamburgerStyled, HamburgerWrapperStyled } from './HamburgerStyles';

const Hamburger = ({ onClick: handleClick, isOpen }) => {
  return (
    <HamburgerWrapperStyled onClick={handleClick}>
      <HamburgerStyled isOpen={isOpen} />
    </HamburgerWrapperStyled>
  );
};

export default Hamburger;
