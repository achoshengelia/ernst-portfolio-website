import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useI18next } from 'gatsby-plugin-react-i18next';

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`;

const SEO = ({ title = 'Home', description }) => {
  const { language } = useI18next();

  const { site } = useStaticQuery(query);

  const metaTitle = title || `${title} | ${site?.siteMetadata.title}`;
  const metaDescription = description || site.siteMetadata.description;

  console.log(site.siteMetadata);

  return (
    <Helmet
      title={metaTitle}
      htmlAttributes={{ lang: language }}
      meta={[
        { name: `description`, content: metaDescription },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(', ')
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  );
};

export default SEO;
