import { Link, withPrefix } from 'gatsby';
import React from 'react';

import * as styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: boolean
};

const Author = ({
  author,
  isIndex
}: Props) => (
  <div className={styles.author}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles.author__photo}
        width="150"
        height="150"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles.author__title}>
        <Link className={styles.author__title_link} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles.author__title}>
        <Link className={styles.author__title_link} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles.author__subtitle}>{author.bio}</p>
  </div>
);

export default Author;
