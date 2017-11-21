import React from 'react';
import { string } from 'prop-types';

import pickRandom from '../../lib/pickRandom';
import oneliners from '../../constants/footer-oneliners';

import './index.css';

const Footer = ({ author }) => (
  <footer className='main-footer'>
    <p>Copyright &copy; {new Date().getFullYear()} {author} All Rights Reserved.</p>
    <p>Made with {pickRandom(oneliners)}</p>
  </footer>
);

Footer.propTypes = {
  author: string.isRequired,
};

export default Footer;
