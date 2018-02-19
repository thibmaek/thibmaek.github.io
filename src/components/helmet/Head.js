import React from 'react';
import { object } from 'prop-types';
import Helmet from 'react-helmet';

import { favicon16, favicon32, favicon96 } from '../../assets/img/icons/favicons';

const Head = ({ siteMetadata, meta }) => (
  <Helmet
    link={[
      { href: `${siteMetadata.siteUrl}/feed.xml`, rel: `alternate`, title: siteMetadata.title, type: `application/rss+xml` },
      { href: favicon16, rel: `icon`, sizes: `16x16`, type: `image/png` },
      { href: favicon32, rel: `icon`, sizes: `32x32`, type: `image/png` },
      { href: favicon96, rel: `icon`, sizes: `96x96`, type: `image/png` },
    ]}
    meta={[
      { content: siteMetadata.description, name: `description`  },
      { content: siteMetadata.keywords, name: `keywords`  },
      { content: siteMetadata.author, name: `author`  },
      { content: `@thibmaek`, name: `twitter:site`  },
      { content: `@thibmaek`, name: `twitter:creator`  },
      { content: siteMetadata.description, name: `og:description`  },
      { content: siteMetadata.title, name: `og:title`  },
      ...meta,
    ]}
    title={`${siteMetadata.author} | ${siteMetadata.title}`}
  />
);

Head.defaultProps = {
  meta: {},
};

Head.propTypes = {
  meta: object,
  siteMetadata: object.isRequired,
};

export default Head;
