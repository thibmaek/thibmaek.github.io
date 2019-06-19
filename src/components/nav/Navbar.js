import React from 'react';
import { array } from 'prop-types';
import { Link } from 'gatsby';

import styles from './Navbar.module.css';

const Navbar = ({ links }) => (
  <nav className={styles.container}>
    <ul className={styles.navItems}>
      {links.map(({ title, slug }) => (
        <li className={styles.navItem} key={title}>
          <Link to={`/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  links: array.isRequired,
};

export default Navbar;
