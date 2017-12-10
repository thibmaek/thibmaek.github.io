import React from 'react';
import { object } from 'prop-types';
import Helmet from 'react-helmet';

import { favicon16, favicon32, favicon96 } from '../../assets/img/icons/favicons';

const Head = ({ siteMetadata, meta }) => (
  <Helmet
    title={`${siteMetadata.author} | ${siteMetadata.title}`}
    meta={[
      { name: `description`, content: siteMetadata.description },
      { name: `keywords`, content: siteMetadata.keywords },
      { name: `author`, content: siteMetadata.author },
      { name: `twitter:site`, content: `@thibmaek` },
      { name: `twitter:creator`, content: `@thibmaek` },
      { name: `og:description`, content: siteMetadata.description },
      { name: `og:title`, content: siteMetadata.title },
      ...meta,
    ]}
    link={[
      { rel: `alternate`, type: `application/rss+xml`, title: siteMetadata.title, href: `${siteMetadata.siteUrl}/feed.xml` },
      { rel: `icon`, type: `image/png`, href: favicon16, sizes: `16x16` },
      { rel: `icon`, type: `image/png`, href: favicon32, sizes: `32x32` },
      { rel: `icon`, type: `image/png`, href: favicon96, sizes: `96x96` },
    ]}
  />
);

Head.defaultProps = {
  meta: {},
};

Head.propTypes = {
  siteMetadata: object.isRequired,
  meta: object,
};

export default Head;
