import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import * as styles from './Menu.module.scss';

type MenuItem = {
  label: string,
  path: string
  isNotGatsbyPage?: boolean
};

type Props = {
  menu: MenuItem[]
};

const Menu = ({menu}: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          {renderMenuLink(item)}
        </li>
      ))}
    </ul>
  </nav>
);

const renderMenuLink = (item: MenuItem) => {
  if (item.isNotGatsbyPage) {
    return <a href={item.path}
              className={styles['menu__list-item-link']}>{item.label}</a>
  } else {
    return <Link
      to={item.path}
      className={styles['menu__list-item-link']}
      activeClassName={styles['menu__list-item-link--active']}
    >
      {item.label}
    </Link>
  }
}

export default Menu;
