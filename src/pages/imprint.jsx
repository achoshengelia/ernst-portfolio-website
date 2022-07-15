import React from 'react';
import { graphql } from 'gatsby';
import Imprint from 'components/Imprint/Imprint';

const ImprintPage = () => {
  return <Imprint />;
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
