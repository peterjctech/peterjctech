import type { GatsbyConfig } from "gatsby";
const path = require("path");

const config: GatsbyConfig = {
    siteMetadata: {
        title: `peterjctech`,
        siteUrl: `https://www.peterjctech.com`,
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: path.resolve("./src/App"),
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                },
            },
        },
    ],
};

export default config;
