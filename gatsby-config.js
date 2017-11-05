module.exports = {
  siteMetadata: {
    title: "Severen's Blog",
    domain: 'shrike.me',
    siteUrl: 'https://shrike.me',
    author: 'Severen Redwood',
    description: "Severen's blog and other things.",
    keywords: '',
  },

  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-css-modules',
      exclude: '/global/',
    },
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

    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-canonical-urls',

    // Must be at the end.
    'gatsby-plugin-netlify',
  ],
};
