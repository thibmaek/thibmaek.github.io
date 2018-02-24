// @flow
import React from 'react';
import Disqus from 'react-disqus-comments';

type Props = {
  location: {
    pathname: string,
  },
  slug: string,
  title: string,
}

const Comments = ({ slug, title, location }: Props) => (
  <Disqus
    category_id=''
    identifier={slug}
    shortname='blog-thibmaekelbergh'
    title={title}
    // TODO: Fill in category_id
    url={location.pathname}
  />
);

export default Comments;
