//library imports
import React from 'react';
import { connect } from 'react-redux';

//module-level-imports
import agent from '../../agent';
import { FETCH_COMMENTS } from '../../constants/actionTypes';

//screen level imports
import CommentSection from './CommentSection';

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
  constructor(props) {
    super(props);
    this.state = {
      shouldShowComments: false,
    };
  }

  getPostAndComments = (postId) => {
    const comments = this.props.comments;
    let postCommentsMap = [];
    comments && comments.length && comments.map(comment => {
      if (comment.postId === postId) {
        postCommentsMap.push({ postId: postId, postComment: comment })
      }
      return postCommentsMap;
    })
    return postCommentsMap;
  }

  fetchComments = (postId) => {
    if (postId) {
      this.props.onClick(agent.Users.getPostComments(postId))
      this.setState({
        shouldShowComments: true,
      });
    }
  }

  hideComments = (postId) => {
    if (postId) {
      this.setState({ shouldShowComments: !this.state.shouldShowComments });
    }
  }

  getPostIdFromComments = () => {
    const { comments } = this.props;
    let postId = '';
    comments && comments.length &&
      comments.forEach(comment => {
        postId = comment.postId;
      })
    return postId;
  }

  render() {
    const { post, comments } = this.props;
    const { shouldShowComments } = this.state;
    const postIdFromComments = this.getPostIdFromComments();
    console.log(postIdFromComments, "postIdFromComments")
    return (
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <div className="article-preview text-center">
            <div className="article-meta">
              <div className="info">
                <h5>Title - {post.title || ''}</h5>
                <p><strong>Content -</strong> {post.body || ''}</p>
              </div>
            </div>
            <span>
              <button
                type="button"
                onClick={(e) => this.fetchComments(post.id)}
                className="btn btn-outline-secondary btn-sm">
                View Comments
        </button>
            </span>
            {shouldShowComments && (postIdFromComments === post.id) && <span className="ml-5"><button
              type="button"
              onClick={(e) => this.hideComments(post.id)}
              className="btn btn-outline-secondary btn-sm">
              Hide Comments
            </button></span>}
            <div>
              {shouldShowComments &&
                comments && comments.length &&
                comments.map(comment => {
                  let commentsList = [];
                  if (comment.postId === post.id) {
                    commentsList = (
                      <div>
                        <CommentSection
                          comment={comment}
                        />
                      </div>
                    )
                  }
                  return commentsList;
                })
              }
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPreview);