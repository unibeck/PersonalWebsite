import moment from 'moment';
import React from 'react';

import { useSiteMetadata } from '../../../hooks';
import Tags from '../Tags';
import * as styles from './Meta.module.scss';

type Props = {
  date: string,
  tags: string[],
  tagSlugs: string[],
};

const Meta = ({
  date, tags, tagSlugs
}: Props) => {
  const {
    disclaimer
  } = useSiteMetadata();

  return (
    <div className={styles.meta}>
      <p className={styles.meta__date}>Published on {moment(date)
        .format('MMMM Do, YYYY')}</p>
      <p className={styles.meta__date}>{disclaimer}</p>
      {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}
    </div>
  );
};

export default Meta;
