//library imports
import React from 'react';
import { connect } from 'react-redux';

//module level imports
import agent from '../../agent';
import { USER_PAGE_LOADED, USER_PAGE_UNLOADED } from '../../constants/actionTypes';

//screen level imports
import UserMeta from './UserMeta';


const mapStateToProps = state => ({
  ...state.user,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: USER_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: USER_PAGE_UNLOADED })
});

class User extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Users.get(this.props.match.params.id),
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.user) {
      return (
        <div className="text-center">Loading...</div>
      );
    }
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{this.props.user.name}</h1>
            <div>
              User Name -  <small>{this.props.user.username}</small>
              <br />
              Email -  <small>{this.props.user.email}</small>
              <br />
              Phone -  <small>{this.props.user.phone}</small>
              <br />
              Website -  <small>{this.props.user.website}</small>
              <br />
              company -  <small>{this.props.user.company.name}</small>
              <br />
              Address -  <small>{this.props.user.address.suite}, {this.props.user.address.street}, {this.props.user.address.city}</small>
              <br />
              Zipcode - <small>{this.props.user.address.zipcode}</small>
            </div>
            <UserMeta
              user={this.props.user}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
