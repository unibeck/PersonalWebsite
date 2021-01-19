import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import ThemeToggle from "../ThemeToggle";
import { useSiteMetadata } from '../../hooks';
// @ts-ignore
import styles from './Sidebar.module.scss';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default Sidebar;
