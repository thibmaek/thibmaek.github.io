import React from 'react';
import { string, func, bool } from 'prop-types';

import styles from './SubmitComment.module.css';
import withCommentHOC from './withCommentHOC';

class SubmitComment extends React.Component {
  static propTypes = {
    slug: string.isRequired,
    onSubmitComment: func.isRequired,
    hasCommented: bool.isRequired,
    error: string,
  }

  static defaultProps = {
    error: undefined,
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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (!this.props.slug) return null;

    return (
      <div>
        <p className={styles.header}>
          {!this.props.hasCommented
            ? `Let me know what you think`
            : `Thanks! Your comment has been registered`}
        </p>
        {this.props.error && (
          <p>Something went wrong, could not post comment: {this.props.error}</p>
        )}
        {!this.props.hasCommented && (
          <form
            className={styles.container}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            method='post'
            name='submit-comment'
            onSubmit={e => this.props.onSubmitComment(e, { ...this.state, slug: this.props.slug })}
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
            />
            <button className={styles.button} type='submit'>
          Comment
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default withCommentHOC(SubmitComment);
