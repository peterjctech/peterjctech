import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
    // apiURL: process.env.STRAPI_API_URL,
    apiURL: "https://6368d734d1d4d5077c05943c--endearing-pegasus-2c1d0b.netlify.app",
    queryLimit: 1000,
    collectionTypes: ["project", "social"],
    singleTypes: ["content"],
};

const config: GatsbyConfig = {
    siteMetadata: {
        siteUrl: `https://www.peterjctech.com`,
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    components: "./src/components",
                    static: "./static",
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "./static/icon.png",
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
    ],
};

export default config;
