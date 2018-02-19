import React from 'react';
import { object, string } from 'prop-types';
import Disqus from 'react-disqus-comments';

const Comments = ({ slug, title, location }) => (
  <Disqus
    shortname='blog-thibmaekelbergh'
    identifier={slug}
    title={title}
    url={location.pathname}
    // TODO: Fill in category_id
    category_id=''
  />
);

Comments.propTypes = {
  location: object.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
};

export default Comments;
