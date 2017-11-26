import React from 'react';
import Disqus from 'react-disqus-comments';

const Comments = ({ slug, title }) => (
  <Disqus
    shortname='blog-thibmaekelbergh'
    identifier={slug}
    title={title}
    url={window.location.href}
    category_id=''
  />
);

export default Comments;
