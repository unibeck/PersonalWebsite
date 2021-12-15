import { Link } from 'gatsby';
import React from 'react';

import * as styles from './Tags.module.scss';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({
  tags,
  tagSlugs
}: Props) => (
  <div className={styles.tags}>
    <ul className={styles.tags__list}>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className={styles.tags__list_item} key={tags[i]}>
          <Link to={slug} className={styles.tags__list_item_link}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
