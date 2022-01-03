import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import * as React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import { useCategoriesList, useSiteMetadata } from '../hooks';

const CategoriesListTemplate = () => {
  const {
    title,
    subtitle
  } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Sidebar/>
      <Page title="Categories">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
