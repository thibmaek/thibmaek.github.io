import React from 'react';
import { string, array, number } from 'prop-types';
import Link from 'gatsby-link';

import computeDateFormat from '../../lib/computeDateFormat';

import { ContinueReadingButton, Tags } from './';

import styles from './Preview.module.css';

const PostPreview = ({ title, summary, date, tags, slug, excerpt, timeToRead }) => (
  <article className={styles.container}>
    <Link to={`/post/${slug}`}>
      <h2>{title}</h2>
    </Link>
    <time className={styles.date}>
      {computeDateFormat(date)} ({timeToRead} min. read)
    </time>
    <summary className={styles.summary}>
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
  timeToRead: 0,
};

PostPreview.propTypes = {
  date: string.isRequired,
  excerpt: string,
  slug: string.isRequired,
  summary: string,
  tags: array,
  timeToRead: number,
  title: string.isRequired,
};

export default PostPreview;
