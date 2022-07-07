import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { navigate } from 'gatsby';
import { Link, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import Menu from 'components/Header/Menu/Menu';
import Hamburger from 'components/Header/Hamburger/Hamburger';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { headerItems } from 'constants/header';
import { customScreenMD } from 'constants/global';
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

  const handleNavigate = (item, isMenu) => {
    if (isMenu) handleToggle();

    if (!item) {
      setShowLanding(!showLanding);
      return scrollTo();
    }

    setShowLanding(false);

    if (!isIndexPage) {
      navigate(!item ? '/' : `/#${slugify(t(item))}`);

      return setTimeout(() => scrollTo(item), 10);
    }
    scrollTo(item, showLanding);
  };

  const isLanguageItem = item => item === 'language';

  const menuProps = {
    handleNavigate,
    isLanguageItem
  };

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
            headerItems.map((item, i) =>
              isLanguageItem(item) ? (
                <NavListItemStyled
                  key={`${item}-${i}`}
                  showLanding={showLanding}
                >
                  <LangLinkStyled to={originalPath} language={t(item)}>
                    {t(item)}
                  </LangLinkStyled>
                </NavListItemStyled>
              ) : (
                <NavListItemStyled
                  key={`${item}-${i}`}
                  onClick={() => handleNavigate(item)}
                  showLanding={showLanding}
                >
                  <Link to={`/#${slugify(t(item))}`}>{t(item)}</Link>
                </NavListItemStyled>
              )
            )
          ) : (
            <Hamburger onClick={handleToggle} isOpen={isOpen} />
          )}
        </NavListStyled>
      </ContainerNavStyled>

      {isOpen && width < customScreenMD
        ? createPortal(<Menu {...menuProps} />, document.getElementById('menu'))
        : null}
    </ContainerHeaderStyled>
  );
};

export default Header;
