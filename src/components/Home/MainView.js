//library imports
import React from 'react';
import { connect } from 'react-redux';

//screen level imports
import UserList from '../UserList';

const mapStateToProps = state => ({
  ...state.articleList,
  users: state.home.users,
});

const mapDispatchToProps = dispatch => ({
});

const MainView = props => {
  return (
    <div className="col-md-12">
      <UserList
        pager={props.pager}
        users={props.users}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
