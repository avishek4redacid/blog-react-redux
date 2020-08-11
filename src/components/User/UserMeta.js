//library imports
import React from 'react';

//screen level imports
import UserActions from './UserActions';

const UserMeta = props => {
  const user = props.user;
  return (
    <div className="article-meta">
      <UserActions user={user} />
    </div>
  );
};

export default UserMeta;
