import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// @ts-ignore
import styles from './ThemeToggle.module.scss';

type Props = {
  isIndex?: boolean,
};

const ThemeToggle = ({ isIndex }: Props) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={styles["theme-toggle-button"]}>
          <input
            type="checkbox"
            id="toggle"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          <label htmlFor="toggle"/>
        </div>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
