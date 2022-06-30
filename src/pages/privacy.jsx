import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Privacy from 'components/Privacy/Privacy';
import SEO from 'components/SEO/SEO';

const PrivacyPage = () => {
  const { t } = useTranslation('privacy');

  return (
    <Layout>
      <SEO title={t('heading')} />
      <Privacy />
    </Layout>
  );
};

export default PrivacyPage;

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
