import React from 'react';
import { string, array } from 'prop-types';

import pickRandom from '../../lib/pickRandom';

import './index.css';

const Footer = ({ author, oneliners }) => (
  <footer className='main-footer'>
    <div>
      <p>Copyright &copy; {new Date().getFullYear()} {author} All Rights Reserved.</p>
      <p>Made with {pickRandom(oneliners)}</p>
    </div>
    <a href='https://www.contentful.com/' rel='nofollow' target='_blank'>
      <img
        className='contentful-attribution'
        src='https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg'
        alt='Powered by Contentful'
      />
    </a>
  </footer>
);

Footer.propTypes = {
  author: string.isRequired,
  oneliners: array.isRequired,
};

export default Footer;
