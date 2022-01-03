import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PageTemplate = ({ data }: Props) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const {
    title: pageTitle,
    description: pageDescription
  } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar/>
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }}/>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        date
      }
      frontmatter {
        title
        description
      }
    }
  }
`;

export default PageTemplate;
