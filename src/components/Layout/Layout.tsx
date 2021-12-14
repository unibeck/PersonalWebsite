import * as React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { ReactNode } from "react";
import { useSiteMetadata } from '../../hooks';
// @ts-ignore
import * as styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({
  children,
  title,
  description,
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = author.photo;
  const metaImageUrl = url + withPrefix(metaImage);

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
