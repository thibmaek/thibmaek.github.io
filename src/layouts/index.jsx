import React from 'react'
import { func } from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/';
import Nav from '../components/nav/';
import Footer from '../components/footer/';

import 'normalize.css';
import '../styles/index.css';

// TODO: Move this to constant/graphql side
const links = [
  {
    title: '👋🏻 About',
    url: '/about'
  },
  {
    title: '🌊 Currents',
    url: '/currents'
  },
  {
    title: '🗞 Publications',
    url: '/publications'
  },
  {
    title: '🔎 Search',
    url: '/search'
  },
  {
    title: '👻 Weird',
    url: '/weird'
  },
];

const IndexLayout = ({ children }) => (
  <div>
    {/* TODO: Abstract this into a <Head /> component */}
    <Helmet
      title="A nice blog about development, Raspberry Pi, plants and probably records"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header>
      <Nav links={links} />
    </Header>
    <main className="main-content">
      {children()}
    </main>
    <Footer />
  </div>
);

IndexLayout.propTypes = {
  children: func,
};

export default IndexLayout;
