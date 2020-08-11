//library imports
import React from 'react';
import { Link } from 'react-router-dom';

const HomePageView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            <i className="ion-home" /> Home
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/users" className="navbar-brand">
            Sample React App
          </Link>
          <HomePageView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
