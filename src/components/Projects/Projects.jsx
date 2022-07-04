import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { CenterWrapperStyled } from 'components/Global';
import Swiper from 'components/Swiper/Swiper';
import { ContainerStyled, MainHeadingStyled } from './ProjectsStyles';

const Projects = () => {
  const { t } = useTranslation('projects');

  return (
    <ContainerStyled id="projects">
      <CenterWrapperStyled>
        <MainHeadingStyled as="h1" isUppercase>
          {t('heading')}
        </MainHeadingStyled>
      </CenterWrapperStyled>

      <Swiper />
    </ContainerStyled>
  );
};

export default Projects;
