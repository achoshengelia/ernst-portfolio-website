import React from 'react';
import { useTranslation } from 'react-i18next';
import { referenceItems } from 'constants/about';
import { CenterWrapperStyled, Heading } from '../../../styles/utils';
import {
  ListStyled,
  ListItemStyled,
  ListContainer,
  ContainerStyled,
  MainWrapperStyled
} from './ReferencesStyles';

const References = () => {
  const { t } = useTranslation('references');

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainWrapperStyled>
          <Heading as="h2" $wrap>
            {t('heading')}
          </Heading>
          <ListContainer>
            <ListStyled>
              {referenceItems.map((item, i) =>
                i < 3 ? (
                  <ListItemStyled key={item}>{t(`${item}`)}</ListItemStyled>
                ) : null
              )}
            </ListStyled>
            <ListStyled>
              {referenceItems.map((item, i) =>
                i > 3 ? (
                  <ListItemStyled key={item}>{t(item)}</ListItemStyled>
                ) : null
              )}
            </ListStyled>
          </ListContainer>
        </MainWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default References;
