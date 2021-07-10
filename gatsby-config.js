module.exports = {
  siteMetadata: {
    title: "邻萌社区服务中心",
    description: "人人可公益，人人可社工。",
    keywords: "公益,社工,支教,慈善,妇联,儿童",
  },
  // flags: {
  //   FAST_DEV: true,
  //   FAST_REFRESH: true,
  //   // PARALLEL_SOURCING: true,
  // },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "邻萌社区服务中心",
        icon: "src/images/custom.png",
        short_name: "邻萌公益",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/favicon.svg',
        mdxExtensions: ['.mdx'],
        titleType: 'append',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: `AppIcons`,
      options: {
        path: `${__dirname}/src/data/app-icons.yaml`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
  ],
};
