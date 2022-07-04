import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ButtonStyled } from 'components/Global';
import { CenterWrapperStyled } from 'components/Global';
import { GlobalContext } from 'context/GlobalContext';
import { ContainerStyled, ParagraphStyled } from './LandingStyles';

const Landing = () => {
  const { showLanding, setShowLanding } = useContext(GlobalContext);
  const initialRender = useRef(true);
  const landingRef = useRef(null);
  const { t } = useTranslation('landing');

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setShowLanding(true);
    }
  }, [setShowLanding]);

  useEffect(() => {
    if (showLanding && window.scrollY !== 0) {
      setTimeout(() => {
        landingRef?.current.scrollIntoView();
      }, 130);
    }
  }, [showLanding]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    initialRender.current = false;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialRender, handleScroll]);

  return (
    <ContainerStyled
      showLanding={showLanding}
      isInitialRender={initialRender.current}
      ref={landingRef}
    >
      <CenterWrapperStyled>
        <ParagraphStyled size="3rem">{t('paragraph')}</ParagraphStyled>
        <ButtonStyled onClick={() => setShowLanding(false)}>
          {t('button')}
        </ButtonStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Landing;
