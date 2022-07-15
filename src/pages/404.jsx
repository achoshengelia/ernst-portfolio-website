import React from 'react';
import { graphql } from 'gatsby';
import NotFound from 'components/NotFound/NotFound';

const ErrorPage = () => {
  return <NotFound />;
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
