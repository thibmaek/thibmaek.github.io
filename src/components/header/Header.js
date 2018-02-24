// @flow
import * as React from 'react';
import Link from 'gatsby-link';

import './header.css';

type Props = {
  title: string,
  children: React.Node,
}

const Header = ({ title, children }: Props) => (
  <header className='main-header'>
    <Link to='/'>
      <div className='main-header-profile'>
        <img alt='Profile picture' src='//github.com/thibmaek.png' />
        <h1>{title}</h1>
      </div>
    </Link>
    {children}
  </header>
);

export default Header;
