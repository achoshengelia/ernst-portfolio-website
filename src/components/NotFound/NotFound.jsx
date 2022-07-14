import React, { useContext, useEffect } from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import {
  ButtonStyled,
  CenterWrapperStyled,
  HeadingStyled
} from 'components/Global';
import { GlobalContext } from 'context/GlobalContext';
import { ContainerStyled } from './NotFoundStyles';

const NotFound = () => {
  const { setOverflowHidden } = useContext(GlobalContext);
  const { t } = useTranslation('404');

  useEffect(() => {
    setOverflowHidden(true);

    return () => setOverflowHidden(false);
  }, [setOverflowHidden]);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <HeadingStyled as="h1" size="6rem">
          404
        </HeadingStyled>
        <HeadingStyled as="h2" size="3rem" noTransform $wrap>
          {t('heading')}
        </HeadingStyled>

        <ButtonStyled as={Link} to="/">
          {t('button')}
        </ButtonStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default NotFound;
