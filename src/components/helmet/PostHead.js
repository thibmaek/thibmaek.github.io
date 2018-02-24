import React from 'react';
import Helmet from 'react-helmet';

import { TMetaContent } from './';

type Props = {
  title: string,
  meta?: TMetaContent,
}

const Head = ({ title, meta }: Props) => (
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

export default Head;
