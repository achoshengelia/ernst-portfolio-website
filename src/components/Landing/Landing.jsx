import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GlobalContext } from 'context/GlobalContext';
import { ButtonStyled } from 'components/Global';
import { CenterWrapperStyled } from 'components/Global';
import { isBrowser } from 'constants/global';
import {
  ContainerStyled,
  OverlayStyled,
  ParagraphStyled
} from './LandingStyles';

const Landing = () => {
  const { showLanding, setShowLanding } = useContext(GlobalContext);
  const initialRender = useRef(true);
  const landingRef = useRef(null);
  const { t } = useTranslation('landing');

  const handleScroll = useCallback(() => {
    if (isBrowser && window.scrollY === 0) {
      setShowLanding(true);
    }
  }, [setShowLanding]);

  useEffect(() => {
    if (isBrowser && showLanding && window.scrollY !== 0) {
      setTimeout(() => {
        landingRef?.current.scrollIntoView();
      }, 130);
    }
  }, [showLanding]);

  useEffect(() => {
    if (isBrowser) {
      window.scrollTo(0, 0);
      window.addEventListener('scroll', handleScroll);
    }
    initialRender.current = false;

    return () => {
      if (isBrowser) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [initialRender, handleScroll]);

  return (
    <ContainerStyled
      showLanding={showLanding}
      isInitialRender={initialRender.current}
      ref={landingRef}
    >
      <CenterWrapperStyled>
        <OverlayStyled />
        <ParagraphStyled size="3rem">{t('paragraph')}</ParagraphStyled>
        <ButtonStyled onClick={() => setShowLanding(false)}>
          {t('button')}
        </ButtonStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Landing;
