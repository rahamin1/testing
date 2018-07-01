import React, { Component } from 'react';

class CommentBox extends Component {

  state = { comment: '' };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange}>
          </textarea>
          <div>
            <button>Submit comment</button>
          </div>
      </form>
    );
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    // TODO - call action creator
    this.setState({ comment: '' });
  };
}

export default CommentBox;
