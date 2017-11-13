import React from 'react';
import { object } from 'prop-types';
import Link from 'gatsby-link';

import './header.css';

const Header = ({ children }) => (
  <header className="main-header">
    <Link to="/">
      <div className="main-header-profile">
        <img src="//github.com/thibmaek.png" alt="Profile picture"/>
        <h1>Thibault Maekelbergh</h1>
      </div>
    </Link>
    {children}
  </header>
);

Header.propTypes = {
  children: object,
};

export default Header;
