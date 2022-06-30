import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { navigate } from 'gatsby';
import { Link, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { headerItems } from 'constants/header';
import Menu from 'components/Header/Menu/Menu';
import Hamburger from 'components/Header/Hamburger/Hamburger';
import { scrollTo, slugify } from 'utils/fns';
import {
  ContainerHeaderStyled,
  ContainerNavStyled,
  LangLinkStyled,
  NavListItemStyled,
  NavListStyled
} from './HeaderStyles';
import { pages } from 'constants/global';

const customScreenMD = 820;

const Header = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation('header');
  const { originalPath } = useI18next();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleNavigate = item => {
    const isNotHomePage =
      originalPath.includes(pages.imprint) ||
      originalPath.includes(pages.privacy);

    if (isNotHomePage) {
      navigate(`/#${slugify(t(item))}`);

      return setTimeout(() => scrollTo(item), 10);
    }
    scrollTo(item);
  };

  const isLanguageItem = item => item === 'language';

  return (
    <ContainerHeaderStyled>
      <ContainerNavStyled as="nav">
        <NavListStyled>
          {!isOpen ? (
            <NavListItemStyled isMain>
              <Link to="/">
                Dr. Ernst {width > customScreenMD ? 'Sebastian' : 'S.'}{' '}
                Gassebner
              </Link>
            </NavListItemStyled>
          ) : null}

          {width > customScreenMD ? (
            headerItems.map(item =>
              isLanguageItem(item) ? (
                <NavListItemStyled key={item}>
                  <LangLinkStyled
                    key={item}
                    to={originalPath}
                    language={t(item)}
                  >
                    {t(item)}
                  </LangLinkStyled>
                </NavListItemStyled>
              ) : (
                <NavListItemStyled
                  key={item}
                  onClick={() => handleNavigate(item)}
                >
                  <Link key={item} to={`/#${slugify(t(item))}`}>
                    {t(item)}
                  </Link>
                </NavListItemStyled>
              )
            )
          ) : (
            <Hamburger onClick={handleToggle} isOpen={isOpen} />
          )}
        </NavListStyled>
      </ContainerNavStyled>

      {isOpen && width < customScreenMD
        ? createPortal(
            <Menu handleToggle={handleToggle} />,
            document.getElementById('menu')
          )
        : null}
    </ContainerHeaderStyled>
  );
};

export default Header;
