module.exports = {
  siteMetadata: {
    title: "Jon Greazel",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-antd",
    "gatsby-transformer-sharp",
  ],
};
