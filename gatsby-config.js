module.exports = {
  siteMetadata: {
    title: `Gatsby Site`,
    headerTitle:`Awesome Gatsby Site`
  },
  plugins: [`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    }
  ],
}
