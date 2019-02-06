import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth-actions/auth';
import { clearAuthToken } from '../local-storage';
class Header extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <span onClick={() => this.logOut()}>Log Out</span>;
    }

    return (
      <div>
        <Link to="/home">Home</Link> | <Link to="/search">Search Jobs </Link>|{' '}
        <Link to="/add">Add Job</Link> |
        <Link to="/schedule">Check Your Schedule</Link> |
        <Link to="/">{logOutButton}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
