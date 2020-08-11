//library imports
import React from 'react';
import { connect } from 'react-redux';

//module-level-imports
import agent from '../../agent';
import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../../constants/actionTypes';

//screen level imports
import Banner from './Banner';
import MainView from './MainView';

//constants
const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = 'all';
    const articlesPromise =
      agent.Users.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <Banner token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
