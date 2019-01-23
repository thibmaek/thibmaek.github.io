import React from 'react';

import encode from '../../lib/encode';

import styles from './SubmitComment.module.css';

export default class SubmitComment extends React.Component {
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

  handleSubmitComment = async evt => {
    evt.preventDefault();
    const form = evt.target;

    try {
      await fetch(`/`, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encode({
          "form-name": form.getAttribute(`name`),
          ...this.state,
        }),
      });
    } catch (error) {
      console.error(`Error posting comment: ${error.toString()}`);
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
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
        <label className={styles.email} htmlFor='email'>
          Email
          <input name='email' onChange={this.handleChange} type='email' />
        </label>
        <textarea className={styles.comment} onChange={this.handleChange} placeholder='Let me know what you think…' />
        <button className={styles.button} type='submit'>
          Comment
        </button>
      </form>
    );
  }
}
