import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { navigate } from 'gatsby';
import { Link, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import Menu from 'components/Header/Menu/Menu';
import Hamburger from 'components/Header/Hamburger/Hamburger';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { headerItems } from 'constants/header';
import { customScreenMD, isBrowser } from 'constants/global';
import { scrollTo, slugify } from 'utils/fns';
import { GlobalContext } from 'context/GlobalContext';
import {
  ContainerHeaderStyled,
  ContainerNavStyled,
  LangLinkStyled,
  NavListItemStyled,
  NavListStyled
} from './HeaderStyles';

const customScreenXS = 280;

const Header = () => {
  const { isIndexPage, showLanding, setShowLanding } =
    useContext(GlobalContext);
  const { width } = useWindowDimensions();
  const { t } = useTranslation('header');
  const { originalPath } = useI18next();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleNavigate = item => {
    setShowLanding(false);

    if (!item && isBrowser) {
      return window.scrollTo(0, 0);
    }

    if (!isIndexPage) {
      navigate(!item ? '/' : `/#${slugify(t(item))}`);

      return setTimeout(() => scrollTo(item), 10);
    }
    scrollTo(item, showLanding);
  };

  const isLanguageItem = item => item === 'language';

  return (
    <ContainerHeaderStyled showLanding={showLanding}>
      <ContainerNavStyled as="nav">
        <NavListStyled>
          {!isOpen && width > customScreenXS ? (
            <NavListItemStyled
              isMain
              onClick={() => handleNavigate('')}
              showLanding={showLanding}
            >
              <Link to="/">
                Dr. Ernst {width > customScreenMD ? 'Sebastian' : 'S.'}{' '}
                Gassebner
              </Link>
            </NavListItemStyled>
          ) : null}

          {width > customScreenMD ? (
            headerItems.map(item =>
              isLanguageItem(item) ? (
                <NavListItemStyled key={item} showLanding={showLanding}>
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
                  showLanding={showLanding}
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
