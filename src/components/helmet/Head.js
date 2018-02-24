import React from 'react';
import Helmet from 'react-helmet';

import { TMetaContent } from './';

import { favicon16, favicon32, favicon96 } from '../../assets/img/icons/favicons';

type Props = {
  siteMetadata: {
    siteUrl: string,
    title: string,
    description: string,
    keywords: string,
    author: string,
    author: string,
  },
  meta?: TMetaContent,
}

const Head = ({ siteMetadata, meta }: Props) => (
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

export default Head;
