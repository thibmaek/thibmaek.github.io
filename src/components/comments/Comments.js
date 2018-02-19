import React from 'react';
import { object, string } from 'prop-types';
import Disqus from 'react-disqus-comments';

const Comments = ({ slug, title, location }) => (
  <Disqus
    category_id=''
    identifier={slug}
    shortname='blog-thibmaekelbergh'
    title={title}
    // TODO: Fill in category_id
    url={location.pathname}
  />
);

Comments.propTypes = {
  location: object.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
};

export default Comments;
