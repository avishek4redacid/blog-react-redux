//library imports
import { routerReducer } from 'react-router-redux';

//module level imports
import user from './reducers/user';
import userList from './reducers/userList';
import postsList from './reducers/postsList';
import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';

export default combineReducers({
  user,
  userList,
  postsList,
  common,
  home,
  router: routerReducer
});
