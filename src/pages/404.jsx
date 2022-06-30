import React from 'react';
import { graphql } from 'gatsby';

const ErrorPage = () => {
  return <div>ErrorPage</div>;
};

export default ErrorPage;

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
