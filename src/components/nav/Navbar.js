import React from 'react';
import Link from 'gatsby-link';

import './Navbar.css';

type Props = {
  links: Array<{
    title: string,
    slug: string,
  }>,
}

const Navbar = ({ links }: Props) => (
  <nav className='main-nav'>
    <ul>
      {links.map(ln =>
        (<li key={ln.title}>
          <Link to={`/${ln.slug}`}>
            {ln.title}
          </Link>
        </li>)
      )}
    </ul>
  </nav>
);

export default Navbar;
