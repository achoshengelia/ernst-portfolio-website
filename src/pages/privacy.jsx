import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout/Layout';
import Privacy from 'components/Privacy/Privacy';

const PrivacyPage = () => {
  return (
    <Layout>
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
