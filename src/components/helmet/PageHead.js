import React from 'react';
import { string } from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

Head.propTypes = {
  title: string.isRequired,
};

export default Head;
