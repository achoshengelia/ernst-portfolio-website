import React from 'react';
import { graphql } from 'gatsby';
import NotFound from 'components/NotFound/NotFound';
import Seo from 'components/SEO/SEO';

const ErrorPage = () => {
  return (
    <>
      <Seo title="Error" />
      <NotFound />
    </>
  );
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
