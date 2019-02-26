import React from 'react';

import encode from '../../lib/encode';

export default ChildComponent => {
  return class withCommentHOC extends React.Component {

    state = {
      hasCommented: false,
      error: undefined,
    }

    get NetlifyFormsHoneyPot() {
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

    handleSubmitComment = (evt, data) => {
      evt.preventDefault();
      const form = evt.target;

      fetch(`/`, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encode({
          "form-name": form.getAttribute(`name`),
          ...data,
        }),
      })
        .then(response => {
          if (response.ok && response.status === 200) {
            this.setState({ hasCommented: true });
          }
        })
        .catch(error => {
          this.setState(
            { error: error.toString() },
            () => console.error(`Error posting comment: ${error.toString()}`)
          );
        });
    }

    render() {
      return (
        <ChildComponent
          hasCommented={this.state.hasCommented}
          onSubmitComment={this.handleSubmitComment}
          {...this.props}
          // onSubmitReaction={this.handleSubmitReaction}
        />
      );
    }
  };
};
