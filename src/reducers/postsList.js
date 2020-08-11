//module level imports
import { POSTS_PAGE_LOADED, POSTS_PAGE_UNLOADED, FETCH_COMMENTS } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case POSTS_PAGE_LOADED:
      return {
        ...state,
        postsList: action.payload[0],
      };
    case POSTS_PAGE_UNLOADED:
      return {};

    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
