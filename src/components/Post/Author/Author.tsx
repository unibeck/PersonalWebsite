import React from 'react';

import { useSiteMetadata } from '../../../hooks';
import { getContactHref } from '../../../utils';
import * as styles from './Author.module.scss';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio_metadata']}
          href={getContactHref('linkedin', author.contacts.linkedin)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on LinkedIn
        </a>
      </p>
    </div>
  );
};

export default Author;
