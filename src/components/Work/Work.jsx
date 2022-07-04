import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { CenterWrapperStyled } from 'components/Global';
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
