import React from 'react';
import { array } from 'prop-types';
import Link from 'gatsby-link';

import './Navbar.css';

const Navbar = ({ links }) => (
  <nav className='main-nav'>
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

Navbar.propTypes = {
  links: array.isRequired,
};

Navbar.defaultProps = {
  links: [],
};

export default Navbar;
