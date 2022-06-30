import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Imprint from 'components/Imprint/Imprint';
import SEO from 'components/SEO/SEO';

const ImprintPage = () => {
  const { t } = useTranslation('imprint');

  return (
    <Layout>
      <SEO title={t('heading')} />
      <Imprint />
    </Layout>
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
