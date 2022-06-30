import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout/Layout';
import Work from 'components/Work/Work';
import Projects from 'components/Projects/Projects';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';

const HomePage = () => {
  return (
    <Layout>
      <Work />
      <Projects />
      <About />
      <Contact />
    </Layout>
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
