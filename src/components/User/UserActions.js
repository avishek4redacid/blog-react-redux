//library imports
import { Link } from 'react-router-dom';
import React from 'react';

const UserActions = props => {
  const user = props.user;
  return (
    <span>
      <Link
        to={`/users/${user.id}/posts`}
        className="btn btn-outline-secondary btn-sm">
        <i className="ion-eye"></i> &nbsp;View Posts
        </Link>
    </span>
  );
};

export default UserActions;
