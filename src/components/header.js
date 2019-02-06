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
    let logOutLink;
    if (this.props.loggedIn) {
      logOutLink = <span onClick={() => this.logOut()}>| Log Out</span>;
      return (
        <div>
          <Link to="/home">Home</Link> | <Link to="/add">Add Job</Link> |
          <Link to="/schedule"> Check Your Schedule </Link>
          <Link to="/">{logOutLink}</Link>
        </div>
      );
    }

    return <div />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
