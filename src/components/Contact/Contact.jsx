import React from 'react';
import { CenterWrapperStyled } from 'components/Global';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import { ContainerStyled } from './ContactStyles';

const Contact = () => {
  return (
    <ContainerStyled id="contact">
      <CenterWrapperStyled>
        <Contacts />
        <Form />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Contact;
