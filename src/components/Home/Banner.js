//library imports
import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          Sample React App
        </h1>
        <p>This is a demo paragraph for example only</p>
      </div>
    </div>
  );
};

export default Banner;
