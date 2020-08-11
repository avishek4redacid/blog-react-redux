//library imports
import React from 'react';
import { Link } from 'react-router-dom';

const UserPreview = props => {
  const user = props.user;
  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="article-preview col-md-8">
        <div className="article-meta">
          <div className="info">
            <Link className="author" to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </div>
          <div className="pull-xs-left user-number">
            <div className="btn btn-sm btn-primary">
              {user.id}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2" />
    </div>
  );
}

export default UserPreview;
