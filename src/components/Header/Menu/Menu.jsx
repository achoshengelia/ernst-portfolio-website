import React from 'react';
import { Link, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { headerItems } from 'constants/header';
import { slugify } from 'utils/fns';
import {
  ContainerListStyled,
  ContainerStyled,
  ListItemStyled,
  LangLinkStyled
} from './MenuStyles';

const Menu = ({ handleNavigate, isLanguageItem }) => {
  const { t } = useTranslation();
  const { originalPath } = useI18next('header');

  return (
    <ContainerStyled>
      <ContainerListStyled as="ul">
        {headerItems.map((item, i) =>
          isLanguageItem(item) ? (
            <ListItemStyled key={`${item}-${i}`}>
              <LangLinkStyled to={originalPath} language={t(item)}>
                {t(item)}
              </LangLinkStyled>
            </ListItemStyled>
          ) : (
            <ListItemStyled
              key={`${item}-${i}`}
              onClick={() => handleNavigate(item, true)}
            >
              <Link to={`/#${slugify(t(item))}`}>{t(item)}</Link>
            </ListItemStyled>
          )
        )}
      </ContainerListStyled>
    </ContainerStyled>
  );
};

export default Menu;
