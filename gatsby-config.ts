import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BJORDANDEV Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        failOn: 'warning',
      }
    },
    {
      resolve: "gatsby-source-hashnode",
      options: {
        username: "bjordandev",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}

export default config
