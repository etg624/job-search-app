import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/home">Home</Link> | <Link to="/search">Search Jobs </Link>|{' '}
      <Link to="/add">Add Job</Link> |
      <Link to="/schedule">Check Your Schedule</Link> |
      <Link to="/">Logout</Link>
    </div>
  );
}

export default Header;
