import React from 'react';
import { Link } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { headerItems } from 'constants/header';
import { scrollTo } from 'utils/fns';
import {
  ContainerListStyled,
  ContainerStyled,
  ListItemStyled,
  LangLinkStyled
} from './MenuStyles';

const Menu = ({ handleToggle }) => {
  const { t } = useTranslation();
  const { originalPath } = useI18next('header');

  return (
    <ContainerStyled>
      <ContainerListStyled as="ul">
        {headerItems.map((item, i) =>
          item === 'language' ? (
            <ListItemStyled key={`${item}-${i}`}>
              <LangLinkStyled
                key={item}
                to={originalPath}
                language={t(`${item}`)}
              >
                {t(item)}
              </LangLinkStyled>
            </ListItemStyled>
          ) : (
            <ListItemStyled
              key={`${item}-${i}`}
              onClick={() => scrollTo(`${item}`)}
            >
              <Link
                key={item}
                to={originalPath}
                onClick={e => {
                  e.preventDefault();
                  handleToggle();
                }}
              >
                {console.log(item)}
                {t(item)}
              </Link>
            </ListItemStyled>
          )
        )}
      </ContainerListStyled>
    </ContainerStyled>
  );
};

export default Menu;
