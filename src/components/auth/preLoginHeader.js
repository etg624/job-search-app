import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/preLoginHeader.css';

function PreLoginHeader() {
  return (
    <header className="pre-login-header header" role="banner">
      <h1>Searchule</h1>
      <Link role="link" className="login-link link" to="/">
        Login
      </Link>
      <Link role="link" className="signup-link link" to="/signup">
        Sign Up
      </Link>
    </header>
  );
}

export default PreLoginHeader;
