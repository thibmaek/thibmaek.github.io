import React from 'react';
import { array } from 'prop-types';
import Link from 'gatsby-link';

import styles from './index.module.css';

const Nav = ({ links }) => (
  <nav className={styles[`main-nav`]}>
    <ul>
      {links.map(ln =>
        <li key={ln.title}>
          <Link to={`/${ln.slug}`}>
            {ln.title}
          </Link>
        </li>
      )}
    </ul>
  </nav>
);

Nav.propTypes = {
  links: array.isRequired,
};

Nav.defaultProps = {
  links: [],
};

export default Nav;
