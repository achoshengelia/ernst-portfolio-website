import React from 'react';
import { useTranslation } from 'react-i18next';
import { CenterWrapperStyled } from '../../styles/utils';
import {
  MainHeadingStyled,
  SubHeadingStyled,
  SubSubHeadingStyled,
  ContainerStyled,
  ParagraphStyled,
  ListItemStyled,
  ListStyled,
  SectionWrapperStyled
} from './PrivacyStyles';

const Privacy = () => {
  const { t } = useTranslation('privacy');

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <SectionWrapperStyled>
          <MainHeadingStyled as="h1" isUppercase $wrap>
            {t('heading-1')}
          </MainHeadingStyled>
          <ParagraphStyled as="p">{t('text-1-1')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-2')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-2-1')}</ParagraphStyled>
          <SubHeadingStyled as="h2">{t('heading-3')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-3-1')}</ParagraphStyled>

          <ListStyled>
            <ListItemStyled as="p">{t('list-1-1')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-2')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-3')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-4')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-5')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-6')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-7')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-1-8')}</ListItemStyled>
          </ListStyled>

          <SubHeadingStyled as="h2">{t('heading-4')}</SubHeadingStyled>
          <SubSubHeadingStyled as="h3">{t('heading-4-1')}</SubSubHeadingStyled>
          <ParagraphStyled as="p">{t('text-4-1')}</ParagraphStyled>
          <SubSubHeadingStyled as="h3">{t('heading-4-2')}</SubSubHeadingStyled>
          <ParagraphStyled as="p">{t('text-4-2')}</ParagraphStyled>
          <SubSubHeadingStyled as="h3">{t('heading-4-3')}</SubSubHeadingStyled>
          <ParagraphStyled as="p">{t('text-4-3')}</ParagraphStyled>

          <ListStyled>
            <ListItemStyled as="p">{t('list-2-1')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-2')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-3')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-4')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-5')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-6')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-7')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-8')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-9')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-10')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-11')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-12')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-13')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-14')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-15')}</ListItemStyled>
            <ListItemStyled as="p">{t('list-2-16')}</ListItemStyled>
          </ListStyled>

          <SubHeadingStyled as="h2">{t('heading-5')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-5-1')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-6')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-6-1')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('text-6-2')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('text-6-3')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('text-6-4')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('text-6-5')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-7')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-7-1')}</ParagraphStyled>
          <SubHeadingStyled as="h2">{t('heading-7-1')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-7-2')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-8')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-8')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-9')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-9')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-10')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-10')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-11')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-11')}</ParagraphStyled>

          <SubHeadingStyled as="h2">{t('heading-12')}</SubHeadingStyled>
          <ParagraphStyled as="p">{t('text-12-1')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('text-12-2')}</ParagraphStyled>
          <ParagraphStyled as="p">{t('text-12-3')}</ParagraphStyled>
        </SectionWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Privacy;
