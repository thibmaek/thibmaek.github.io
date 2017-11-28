import React from 'react';
import { object } from 'prop-types';
import Helmet from 'react-helmet';

import { favicon16, favicon32, favicon96 } from '../../assets/img/icons/favicons';

const Head = ({ siteMetadata }) => (
  <Helmet
    title={`${siteMetadata.author} | ${siteMetadata.title}`}
    meta={[
      { name: `description`, content: siteMetadata.title },
      { name: `keywords`, content: siteMetadata.keywords },
      { name: `author`, content: siteMetadata.author },
      { name: `twitter:site`, content: `@thibmaek` },
      { name: `twitter:twitter:creator`, content: `@thibmaek` },
    ]}
    link={[
      { rel: `icon`, type: `image/png`, href: favicon16, sizes: `16x16` },
      { rel: `icon`, type: `image/png`, href: favicon32, sizes: `32x32` },
      { rel: `icon`, type: `image/png`, href: favicon96, sizes: `96x96` },
    ]}
  />
);

Head.propTypes = {
  siteMetadata: object.isRequired,
};

export default Head;
