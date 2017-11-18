import React from 'react';
import { func } from 'prop-types';
import Helmet from 'react-helmet';

import links from '../constants/links';

import Header from '../components/header/';
import Nav from '../components/nav/';
import Footer from '../components/footer/';

import 'normalize.css';
import '../styles/index.css';

const IndexLayout = ({ children }) => (
  <div className='main-container'>
    <Helmet
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    <Header>
      <Nav links={links} />
    </Header>
    <main className='main-content'>
      {children()}
    </main>
    <Footer />
  </div>
);

IndexLayout.propTypes = {
  children: func.isRequired,
};

export default IndexLayout;
