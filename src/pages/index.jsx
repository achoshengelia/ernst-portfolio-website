import React from 'react';
import { graphql } from 'gatsby';
import Landing from 'components/Landing/Landing';
import Work from 'components/Work/Work';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Landing />
      <Work />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;

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
