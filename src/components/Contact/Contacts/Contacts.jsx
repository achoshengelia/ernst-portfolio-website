import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { emailAddress, phoneNumber } from 'constants/global';
import { EmailIcon, PhoneIcon } from '../../../assets/icons';
import {
  ContainerStyled,
  FieldWrapperStyled,
  LinkStyled,
  MainHeadingStyled,
  ParagraphStyled
} from './ContactsStyles';

const Contacts = () => {
  const { t } = useTranslation('contact');

  return (
    <ContainerStyled>
      <MainHeadingStyled color="light" as="h1" isUppercase $wrap>
        {t('heading')}
      </MainHeadingStyled>
      <FieldWrapperStyled>
        <ParagraphStyled color="light" as="p">
          {t('paragraph')}
        </ParagraphStyled>
      </FieldWrapperStyled>
      <FieldWrapperStyled>
        <PhoneIcon />
        <LinkStyled href={`tel:${phoneNumber}`}>{phoneNumber}</LinkStyled>
      </FieldWrapperStyled>
      <FieldWrapperStyled>
        <EmailIcon />
        <LinkStyled href={`mailto:${emailAddress}`}>{emailAddress}</LinkStyled>
      </FieldWrapperStyled>
    </ContainerStyled>
  );
};

export default Contacts;
