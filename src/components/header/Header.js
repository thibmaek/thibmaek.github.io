import React from 'react';
import { string, node } from 'prop-types';
import Link from 'gatsby-link';

import './Header.css';

const Header = ({ title, children }) => (
  <header className='main-header'>
    <Link to='/'>
      <div className='main-header-profile'>
        <img src='//github.com/thibmaek.png' alt='Profile picture' />
        <h1>{title}</h1>
      </div>
    </Link>
    {children}
  </header>
);

Header.defaultProps = {
  children: ``,
},

Header.propTypes = {
  children: node,
  title: string.isRequired,
};

export default Header;
