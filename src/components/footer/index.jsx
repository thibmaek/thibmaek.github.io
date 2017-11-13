import React from 'react';

import './index.css';

const Footer = () => (
  <footer className='main-footer'>
    {/* TODO: Replace name with name from site config author */}
    &copy; {new Date().getFullYear()} Thibault Maekelbergh
  </footer>
);

export default Footer;
