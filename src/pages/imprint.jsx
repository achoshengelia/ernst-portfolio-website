import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Imprint from 'components/Imprint/Imprint';
import Seo from 'components/SEO/SEO';

const ImprintPage = () => {
  const { t } = useTranslation('imprint');

  return (
    <>
      <Seo title={t('heading')} />
      <Imprint />
    </>
  );
};

export default ImprintPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
