import React, { useContext } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GlobalContext } from 'context/GlobalContext';
import { CenterWrapperStyled } from 'components/Global';
import { footerItems } from 'constants/footer';
import { slugify, scrollTo, getIsIndexPage } from 'utils/fns';
import {
  ArrowWrapperStyled,
  ContainerStyled,
  FooterListItemStyled,
  FooterListStyled
} from './FooterStyles';

const isScrollTop = i => i === 1;

const Footer = () => {
  const { t } = useTranslation('footer');
  const { originalPath } = useI18next();
  const { showLanding, setShowLanding } = useContext(GlobalContext);

  const isIndexPage = getIsIndexPage();

  const handleClick = () => {
    if (isIndexPage) setShowLanding(!showLanding);
    scrollTo();
  };

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <FooterListStyled isMainList>
          <FooterListItemStyled isFirstChild>
            {t(footerItems[0])}
          </FooterListItemStyled>

          <FooterListStyled>
            {footerItems.map((item, i) =>
              i === 0 ? null : (
                <FooterListItemStyled key={item}>
                  {isScrollTop(i) ? (
                    <Link to={originalPath} onClick={handleClick}>
                      <ArrowWrapperStyled>↑</ArrowWrapperStyled> {t(item)}
                    </Link>
                  ) : (
                    <Link to={`/${slugify(item)}`}>{t(item)}</Link>
                  )}
                </FooterListItemStyled>
              )
            )}
          </FooterListStyled>
        </FooterListStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Footer;
