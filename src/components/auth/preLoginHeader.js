import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/preLoginHeader.css';

function PreLoginHeader() {
  return (
    <div className="pre-login-header header">
      <h1>Searchule</h1>
      <Link role="link" className="login-link link" to="/">
        Login
      </Link>
      <Link role="link" className="signup-link link" to="/signup">
        Sign Up
      </Link>
    </div>
  );
}

export default PreLoginHeader;
