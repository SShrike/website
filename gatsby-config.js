module.exports = {
  siteMetadata: {
    title: 'shrike.me',
    domain: 'shrike.me',
    siteUrl: 'https://shrike.me',
    author: 'Severen Redwood',
    description: "Severen's blog and other things.",
    keywords: '',
  },

  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',

    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/typography',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.2rem',
            },
          },
          'gatsby-remark-katex',
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-66656915-1' },
    },

    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-canonical-urls',

    // Must be at the end.
    'gatsby-plugin-netlify',
  ],
};
