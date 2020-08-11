//library imports
import React from 'react';

//screen level imports
import UserPreview from './UserPreview';

const UserList = props => {
  if (!props.users) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.users.length === 0) {
    return (
      <div className="article-preview">
        No users are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.users.map(user => {
          return (
            <UserPreview user={user} key={user.id} />
          );
        })
      }

    </div>
  );
};

export default UserList;
