import React from 'react';
import { useTranslation } from 'react-i18next';
import { CenterWrapperStyled } from '../../styles/utils';
import Works from './Works/Works';
import { ContainerStyled, MainHeadingStyled } from './WorkStyles';

const Work = () => {
  const { t } = useTranslation('work');

  return (
    <ContainerStyled id="work">
      <CenterWrapperStyled>
        <MainHeadingStyled as="h1" isUppercase $wrap>
          {t('heading')}
        </MainHeadingStyled>
        <Works />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Work;
