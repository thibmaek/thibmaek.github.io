import React from 'react';
import { string, array } from 'prop-types';

import computeDateFormat from '../../lib/computeDateFormat';

import Tags from './tags';
import ContinueReadingButton from './continue-reading-btn';

import styles from './styles/preview.module.css';

const PostPreview = ({ title, summary, date, tags, slug, excerpt, timeToRead }) => (
  <article className={styles[`post-preview-container`]}>
    <h2 className={styles[`post-preview-title`]}>{title}</h2>
    <time className={styles[`post-preview-date`]}>
      {computeDateFormat(date)} ({timeToRead} min. read)
    </time>
    <summary className={styles[`post-preview-summary`]}>
      {summary || excerpt}
    </summary>
    <ContinueReadingButton slug={slug} />
    {tags ? <Tags tags={tags} /> : null}
  </article>
);

PostPreview.defaultProps = {
  excerpt: null,
  summary: null,
  tags: [],
};

PostPreview.propTypes = {
  date: string.isRequired,
  excerpt: string,
  slug: string.isRequired,
  summary: string,
  tags: array,
  timeToRead: string.isRequired,
  title: string.isRequired,
};

export default PostPreview;
