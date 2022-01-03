import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';

import * as styles from './ThemeToggle.module.scss';

type Props = {
  className?: string
};

const ThemeToggle = ({ className }: Props) => (
  <div className={className}>
    <ThemeToggler>
      {({
        theme,
        toggleTheme
      }) => (
        <div className={styles.theme_toggle_button}>
          <input
            type="checkbox"
            id="toggle"
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          <label htmlFor="toggle"/>
        </div>
      )}
    </ThemeToggler>
  </div>
);

export default ThemeToggle;
