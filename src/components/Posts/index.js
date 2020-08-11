import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { POSTS_PAGE_LOADED, POSTS_PAGE_UNLOADED } from '../../constants/actionTypes';
import PostsPreview from './PostsPreview';

const mapStateToProps = state => ({
  ...state.postsList,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: POSTS_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: POSTS_PAGE_UNLOADED })
});

class Posts extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Users.getUserPosts(this.props.match.params.id),
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.postsList) {
      return (
        <div className="">Loading...</div>
      );
    }
    return (
      <div className="article-page">
        {
          this.props.postsList.map(post => {
            return (
              <PostsPreview post={post} key={post.id} />
            );
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
