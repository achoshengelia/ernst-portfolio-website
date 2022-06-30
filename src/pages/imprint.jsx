import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout/Layout';
import Imprint from 'components/Imprint/Imprint';

const ImprintPage = () => {
  return (
    <Layout>
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
