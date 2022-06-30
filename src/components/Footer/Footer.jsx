import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'react-i18next';
import { footerItems } from 'constants/footer';
import { slugify } from 'utils/fns';
import { CenterWrapperStyled } from '../../styles/utils';
import {
  ArrowWrapperStyled,
  ContainerStyled,
  FooterListItemStyled,
  FooterListStyled
} from './FooterStyles';

const isScrollTop = i => i === 1;

const Footer = () => {
  const { t } = useTranslation('footer');

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
                  <Link to={isScrollTop(i) ? '' : `/${slugify(item)}`}>
                    {isScrollTop(i) ? (
                      <ArrowWrapperStyled>↑</ArrowWrapperStyled>
                    ) : null}{' '}
                    {t(item)}
                  </Link>
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
