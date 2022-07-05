import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useI18next } from 'gatsby-plugin-react-i18next';
import image from 'assets/images/og-image.jpg';

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        keywords
        author
        url
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const { language } = useI18next();

  const { site } = useStaticQuery(query);

  const metaTitle = title
    ? `${title} | ${site?.siteMetadata.title}`
    : site?.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

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
          name: 'og:url',
          content: site.siteMetadata.url
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
          property: 'og:image',
          content: image
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
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

export default Seo;
