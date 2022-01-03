'use strict';

const siteConfig = require('./config');
const postCssPlugins = require('./postcss-config');

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    siteUrl: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    disclaimer: siteConfig.disclaimer,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/static/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/static/media`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'css',
        path: `${__dirname}/static/css`
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => (
            allMarkdownRemark.edges.map((edge) => ({
              ...edge.node.frontmatter,
              description: edge.node.frontmatter.description,
              date: edge.node.fields.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }]
            }))
          ),
          query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [fields___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        date
                        slug
                      }
                      frontmatter {
                        title
                        template
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
          output: '/rss.xml',
          title: siteConfig.title
        }]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links'
        ]
      }
    },

    // Parse all images files
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,

          respectDNT: true
        },
      },
    },

    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteConfig.url,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },

    // This plugin takes generates a web manifest file so the website can be added to a
    // homescreen on Android.
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'static/media/profile.jpg'
      },
    },

    // Generates a service worker and AppShell html file so the site works offline and is otherwise
    // resistant to bad networks.
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
      }
    },
    'gatsby-plugin-optimize-svgs',
    'gatsby-plugin-dark-mode'
  ]
};
