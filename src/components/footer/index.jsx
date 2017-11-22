import React from 'react';
import { string, array } from 'prop-types';

import pickRandom from '../../lib/pickRandom';

import './index.css';

const Footer = ({ author, oneliners }) => (
  <footer className='main-footer'>
    <p>Copyright &copy; {new Date().getFullYear()} {author} All Rights Reserved.</p>
    <p>Made with {pickRandom(oneliners)}</p>
  </footer>
);

Footer.propTypes = {
  author: string.isRequired,
  oneliners: array.isRequired,
};

export default Footer;
