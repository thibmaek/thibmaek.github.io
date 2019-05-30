import React from 'react';
import { func, bool, string } from 'prop-types';
import ReactToggle from 'react-toggle';

import "react-toggle/style.css";

import styles from './ThemeToggle.module.css';

const Toggle = ({ defaultChecked, onToggle, value }) => (
  <div className={styles.container}>
    <span>{value} Mode</span>
    <ReactToggle
      defaultChecked={defaultChecked}
      icons={{
        checked: (
          <span aria-label='theme-light' role='img'>☀️</span>
        ),
        unchecked: (
          <span aria-label='theme-dark' role='img'>🌚</span>
        ),
      }}
      onChange={onToggle}
      value={value}
    />
  </div>
);

Toggle.propTypes = {
  defaultChecked: bool,
  onToggle: func,
  value: string.isRequired,
};

Toggle.defaultProps = {
  defaultChecked: false,
  onToggle: () => {},
};

export default Toggle;
