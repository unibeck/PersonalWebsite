import React from 'react';

import { useSiteMetadata } from '../../hooks';
import ThemeToggle from '../ThemeToggle';
import Author from './Author';
import Contacts from './Contacts';
import Menu from './Menu';
import * as styles from './Sidebar.module.scss';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const {
    author,
    menu
  } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <Author author={author} isIndex={isIndex}/>
        <Menu menu={menu}/>
        <Contacts contacts={author.contacts}/>
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default Sidebar;
