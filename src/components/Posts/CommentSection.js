//library imports
import React from 'react';
import { connect } from 'react-redux';

//module level imports
import { FETCH_COMMENTS } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.post,
  currentUser: state.common.currentUser,
  comments: state.postsList.comments,
});

const mapDispatchToProps = dispatch => ({
  onClick: payload =>
    dispatch({ type: FETCH_COMMENTS, payload })
});


class PostsPreview extends React.Component {
  render() {
    const comment = this.props.comment;
    return (
      <div className="mt-5">
        <ul>
          <li>
            <h6>{comment.name || ''}</h6>
            <small>{comment.body || ''}</small>
            <br />
            <small><strong>commented by - {comment.email || ''}</strong></small>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPreview);