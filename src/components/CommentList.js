import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }

  renderComments() {
    return (
      this.props.comments.map((comment, index) => {
        return (
          <li key={index}>
            {comment}
          </li>
        );
      })
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
