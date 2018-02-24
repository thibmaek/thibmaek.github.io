import React from 'react';
import Link from 'gatsby-link';

import computeDateFormat from '../../lib/computeDateFormat';

import { ContinueReadingButton, Tags } from './';

import './styles/preview.css';

type Props = {
  date: Date,
  excerpt?: ?string,
  slug: string,
  summary?: ?string,
  tags?: Array<string>,
  timeToRead?: number,
  title: string,
}

const PostPreview = ({ title, summary, date, tags, slug, excerpt, timeToRead }: Props) => (
  <article className='post-preview-container'>
    <Link to={`/post/${slug}`}>
      <h2 className='post-preview-title'>{title}</h2>
    </Link>
    <time className='post-preview-date'>
      {computeDateFormat(date)} ({timeToRead} min. read)
    </time>
    <summary className='post-preview-summary'>
      {summary || excerpt }
    </summary>
    <ContinueReadingButton slug={slug} />
    {tags ? <Tags tags={tags} /> : null}
  </article>
);

PostPreview.defaultProps = {
  excerpt: null,
  summary: null,
  tags: null,
  timeToRead: 0,
};

export default PostPreview;
