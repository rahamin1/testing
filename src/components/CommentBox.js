import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {

  state = { comment: '' };

  render() {
    return (
      <div>
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
        <button className="fetch-comments-button"
          onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };
}

export default connect(null, actions)(CommentBox);
