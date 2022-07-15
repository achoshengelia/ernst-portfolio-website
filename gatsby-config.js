const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Dr. Ernst Gassebner`,
    description: `Verlässliche, umfangreiche & professionelle Gutachten, Schätzungen und Fachberatungen mit Schwerpunkt  Obst- und Weinbau.`,
    keywords: [
      `Agronom`,
      `Südtirol`,
      `Schätzungsgutachten`,
      `GlobalGap`,
      `Vorbereitung`,
      `Obstbau`,
      `Weinbau`,
      `Beratung`
    ],
    author: `Dr. Ernst Sebastian Gassebner`,
    url: 'https://ernstgassebner.com'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        root: path.join(__dirname, `src`),
        resolveModules: [path.join(__dirname, `libs`)],
        components: path.join(__dirname, `src`, `components`),
        constants: path.join(__dirname, `src`, `constants`),
        hooks: path.join(__dirname, `src`, `hooks`),
        utils: path.join(__dirname, `src`, `utils`),
        images: path.join(__dirname, `src`, `assets`, 'images')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`de`, `it`],
        siteUrl: `https://ernstgassebner.com`,
        defaultLanguage: `de`,
        fallbackLanguage: `de`,
        prefixDefault: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          nsSeparator: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'menu',
        id: 'menu'
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`
  ]
};
