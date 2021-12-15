import { graphql } from 'gatsby';
import * as React from 'react';

import Feed from '../components/Feed';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import { useSiteMetadata } from '../hooks';
import type { AllMarkdownRemark, PageContext } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({
  data,
  pageContext
}: Props) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex/>
      <Page>
        <Feed edges={edges}/>
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [fields___date] }
      ){
      edges {
        node {
          fields {
            date
            slug
            categorySlug
          }
          frontmatter {
            title
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
