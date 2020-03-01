module.exports = {
  siteMetadata: {
    title: `Miguel Carvalho | Data Scientist`,
    name: `Miguel Carvalho`,
    siteUrl: `https://miguelc.io`,
    description: `Miguel Carvalho - Data Scientist`,
    hero: {
      heading: `Hi, welcome - I'm Miguel 👋🏼 <br /> Feel free to browse around and let me know what you think!`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`
      },
      {
        name: `github`,
        url: `https://github.com/narative`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {}
    }
  ]
};
