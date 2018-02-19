import React from 'react';
import { string, object } from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({ title, meta }) => (
  <Helmet meta={[
    { content: `article`, name: `og:type` },
    ...meta,
  ]}>
    <title>{title}</title>
  </Helmet>
);

Head.defaultProps = {
  meta: {},
};

Head.propTypes = {
  meta: object,
  title: string.isRequired,
};

export default Head;
