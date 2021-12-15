import { Link } from 'gatsby';
import React from 'react';

import type { Node } from '../../types';
import ThemeToggle from '../ThemeToggle';
import Author from './Author';
import Content from './Content';
import Meta from './Meta';
import * as styles from './Post.module.scss';
import Tags from './Tags';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const {
    date,
    tagSlugs
  } = post.fields;
  const {
    tags,
    title
  } = post.frontmatter;

  return (
    <div className={styles.post}>
      <div className={styles.post__menu}>
        <Link className={styles.post__home_button} to="/">All Articles</Link>
        <ThemeToggle className={styles.post__theme_toggle}/>
      </div>

      <div className={styles.post__content}>
        <Content body={html} title={title}/>
      </div>

      <div className={styles.post__footer}>
        <Meta date={date}/>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}
        <Author/>
      </div>
    </div>
  );
};

export default Post;
