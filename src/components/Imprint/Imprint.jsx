import React, { Fragment } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { CenterWrapperStyled } from 'components/Global';
import { emailAddress, phoneNumber } from 'constants/global';
import { imprintItems } from 'constants/imprint';
import {
  ContainerStyled,
  MainHeadingStyled,
  SubHeadingStyled,
  ParagraphStyled,
  ListItemStyled,
  ListStyled,
  SectionWrapperStyled
} from './ImprintStyles';

const Imprint = () => {
  const { t } = useTranslation('imprint');

  const isPublisherInfo = i => i === 0;

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeadingStyled as="h1" isUppercase>
          {t('heading')}
        </MainHeadingStyled>
        {imprintItems.map(({ heading, content }, i) => (
          <Fragment key={`${heading}-${i}`}>
            <SubHeadingStyled as="h2">{t(heading)}</SubHeadingStyled>
            {isPublisherInfo(i) ? (
              <RenderPublisherInfo content={content} />
            ) : (
              <SectionWrapperStyled>
                {content.map((item, i) => (
                  <ParagraphStyled key={`${item}-${i}`}>
                    {t(item)}
                  </ParagraphStyled>
                ))}
              </SectionWrapperStyled>
            )}
          </Fragment>
        ))}
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Imprint;

const RenderPublisherInfo = ({ content }) => {
  const { t } = useTranslation('imprint');

  const isPhoneNumber = str => str === 'number';
  const isEmailAddress = str => str === 'email';

  return (
    <ListStyled>
      {content.map((item, i) => (
        <Fragment key={`${item}-${i}`}>
          {isPhoneNumber(item) ? (
            <ListItemStyled>
              <a href={`tel:${phoneNumber}`}>Tel: {phoneNumber}</a>
            </ListItemStyled>
          ) : isEmailAddress(item) ? (
            <ListItemStyled>
              <a href={`mailto:${emailAddress}`}>E-mail: {emailAddress}</a>
            </ListItemStyled>
          ) : (
            <ListItemStyled>{t(item)}</ListItemStyled>
          )}
        </Fragment>
      ))}
    </ListStyled>
  );
};
