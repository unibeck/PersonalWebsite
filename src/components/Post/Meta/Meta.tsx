import moment from 'moment';
import React from 'react';

import * as styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published on {moment(date)
      .format('MMMM Do, YYYY')}</p>
  </div>
);

export default Meta;
