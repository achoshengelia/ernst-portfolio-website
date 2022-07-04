import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import References from 'components/About/References/References';
import { CenterWrapperStyled } from 'components/Global';
import {
  ContainerStyled,
  ImageWrapperStyled,
  MainHeadingStyled,
  ParagraphStyled,
  SectionWrapperStyled
} from './AboutStyles';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <ContainerStyled id="about">
      <CenterWrapperStyled>
        <SectionWrapperStyled>
          <MainHeadingStyled as="h1" isUppercase>
            {t('heading')}
          </MainHeadingStyled>
          <ParagraphStyled as="p">{t('paragraph-1')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('paragraph-2')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('paragraph-3')}</ParagraphStyled>
        </SectionWrapperStyled>

        <ImageWrapperStyled>
          <StaticImage
            src="../../assets/images/ernst2.jpeg"
            alt="A picture of Ernst Gassebner"
            className="gatsby-image"
            placeholder="tracedSVG"
          />
        </ImageWrapperStyled>
      </CenterWrapperStyled>
      <References />
    </ContainerStyled>
  );
};

export default About;
