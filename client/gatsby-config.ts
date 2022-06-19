import type { GatsbyConfig } from "gatsby";
const path = require("path");
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
// STRAPI_API_URL=http://127.0.0.1:1337
// console.log(process.env.STRAPI_TOKEN);

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    queryLimit: 1000,
    collectionTypes: [
        {
            singularName: "project",
            queryParams: {
                populate: {
                    screenshots: "*",
                    demo: "*",
                    stack: {
                        name: "*",
                    },
                },
            },
        },
        "social",
    ],
    singleTypes: ["content"],
};

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
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
    ],
};

export default config;
