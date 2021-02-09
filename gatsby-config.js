module.exports = {
  siteMetadata: {
    title: 'The Soda Stop',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Soda Stop',
        short_name: 'sodastop',
        start_url: '/',
        icon: 'src/images/sodastop.png',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Shrikhand`,
            variants: [`400`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ],
};
