'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');


const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // Get metadata from file
    const filePath = createFilePath({ node, getNode });
    const filename = path.parse(filePath).base
    const date = filename.split('---')[0];

    createNodeField({
      node,
      name: 'date',
      value: date
    });

    createNodeField({
      node,
      name: 'slug',
      value: filePath
    });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
