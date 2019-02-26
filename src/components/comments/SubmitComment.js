import React from 'react';
import { string } from 'prop-types';

import encode from '../../lib/encode';

import styles from './SubmitComment.module.css';

export default class SubmitComment extends React.Component {
  static propTypes = {
    slug: string.isRequired,
  }

  get Internal$HTMLSupport() {
    return [
      <input key='hiddenInput' name='form-name' type='hidden' value='contact' />,
      <p hidden key='hiddenBotField'>
        <label htmlFor='bot-field'>
          Don’t fill this out:{` `}
          <input name='bot-field' onChange={this.handleChange} />
        </label>
      </p>,
    ];
  }

  handleSubmitComment = evt => {
    evt.preventDefault();
    const form = evt.target;

    fetch(`/`, {
      method: `POST`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: encode({
        "form-name": form.getAttribute(`name`),
        // slug: this.props.slug,
        ...this.state,
      }),
    }).catch(error => console.error(`Error posting comment: ${error.toString()}`));
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (!this.props.slug) return null;

    return (
      <form
        className={styles.container}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        method='post'
        name='submit-comment'
        onSubmit={this.handleSubmitComment}
      >
        {this.Internal$HTMLSupport}
        <input name='slug' type='hidden' value={this.props.slug} />
        <label className={styles.email} htmlFor='email'>
          Email
          <input name='email' onChange={this.handleChange} type='email' />
        </label>
        <textarea
          className={styles.comment}
          name='comment'
          onChange={evt => this.handleChange({ ...evt, target: { ...evt.target, name: `comment` } })}
          placeholder='Let me know what you think…'
        />
        <button className={styles.button} type='submit'>
          Comment
        </button>
      </form>
    );
  }
}
