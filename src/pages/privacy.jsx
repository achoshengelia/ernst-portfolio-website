import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Privacy from 'components/Privacy/Privacy';
import Seo from 'components/SEO/SEO';

const PrivacyPage = () => {
  const { t } = useTranslation('privacy');

  return (
    <>
      <Seo title={t('heading')} />
      <Privacy />
    </>
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
