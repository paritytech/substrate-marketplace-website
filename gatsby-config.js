/* read the `.env.*` files, gatsby builtin */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = require('./config/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    /* Custom ESLint to your Gatsby dev environment  */
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    'gatsby-plugin-postcss',
    /* use tailwindcss, used sass instead of css */
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          /* Load custom Tailwind CSS configuration, used to purge
             "unused" tailwind classes */
          require('./tailwind.config.js'),
        ],
      },
    },

    /* removing registered legacy worker from gatsby-plugin-offline */
    'gatsby-plugin-remove-serviceworker',

    /* add seo headers and page titles, from pages/components */
    'gatsby-plugin-react-helmet',

    /* generate an application manifest.json */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Substrate.io`,
        short_name: `substrate.io`,
        start_url: `/`,
        background_color: `#24CC85`,
        theme_color: `#24CC85`,
        display: `minimal-ui`,
        /* icon path is relative to the root of the site. */
        icon: `media/favicon/favicon.png`,
      },
    },

    /* fetch data from external graphql endpoint */
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'marketplace',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'marketplace',
        // Url to query from
        url: 'https://marketplace-api.substrate.dev/graphql',
      },
    },

    /* source file system for (code based) icon images (svg) */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs/`,
        },
      },
    },

    /* source file system for (cms) images/media/upload dir */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/media`,
      },
    },

    /* work with images
       - need to be after sourcing images
       - docs: https://www.gatsbyjs.com/plugins/gatsby-plugin-image */
    `gatsby-plugin-image`,
    /* transform and get data from images */
    `gatsby-plugin-sharp`,
    /* querying for images used in dynamic components */
    `gatsby-transformer-sharp`,
    /* Adds svg-react-loader to gatsby webpack config */
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svg/`,
        },
      },
    },

    /* allow to use relative path for images in markdown and frontmatter;
     used to work with netlify-cms, loaded after the media themselves */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // relative path for images in markdown content
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: `${__dirname}`, // `/media/` already in img.src
              include: ['featured_image', 'markdownremark'],
            },
          },
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
          /* format (images) file path, when used in markdown file frontmatter;
              Allow use of project "relative path": ex: /media;
              (docs: https://www.gatsbyjs.com/plugins/gatsby-remark-normalize-paths) */
          {
            resolve: 'gatsby-remark-normalize-paths',
            options: {
              pathFields: ['image'],
            },
          },
          // links from markdown open in new tab by default
          {
            resolve: `gatsby-remark-external-links`,
          },
          // add IDs to headings generated from markdown
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              elements: [`h2`, `h3`],
            },
          },
        ],
      },
    },

    /* source file system for content dir */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./content/`,
      },
    },

    /* source the locales for gatsby-react-i18next */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          fallbackLng: 'en',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },

    /*
      bypass netlify CMS, not needed in current version; inherited from substrate-website codebase
      to be removed later or moved globally or moved to gastby substrate-plugin
    /*
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     /* call the js file, instead of yaml */
    //     manualInit: true,
    //     /* Netlify CMS customization code directory. */
    //     modulePath: `${__dirname}/src/cms/index.js`,
    //     /* use netlify-identity widget to login */
    //     enableIdentityWidget: true,
    //   },
    // },

    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Marketplace`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [`**/dev-404-page/**`, `**/404/**`, `**/404.html`, `**/offline-plugin-app-shell-fallback/**`],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        domain: 'api-sa.substrate.io',
        eventsGlobal: 'sa',
        events: true,
        trackPageViews: true,
      },
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
      options: {
        excludedPaths: [`/404.html`],
      },
    },
  ],
};
