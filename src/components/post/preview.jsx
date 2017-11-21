import React from 'react';
import { string, array } from 'prop-types';

import computeDateFormat from '../../lib/computeDateFormat';

import Tags from './tags';
import ContinueReadingButton from './continue-reading-btn';

import './styles/preview.css';

const PostPreview = ({ title, summary, date, tags, slug }) => (
  <article className='post-preview-container'>
    <h2 className='post-preview-title'>{title}</h2>
    <time className='post-preview-date'>
      {computeDateFormat(date)}
    </time>
    <summary className='post-preview-summary'>
      {summary}
    </summary>
    <ContinueReadingButton slug={slug} />
    {tags ? <Tags tags={tags} /> : null}
  </article>
);

PostPreview.defaultProps = {
  tags: [],
};

PostPreview.propTypes = {
  date: string.isRequired,
  slug: string.isRequired,
  summary: string.isRequired,
  tags: array,
  title: string.isRequired,
};

export default PostPreview;
