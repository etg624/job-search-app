import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header';
import LandingPage from './components/landing-page';
import JobList from './components/jobList';
import RegistrationPage from './components/auth/registration-page';
import { Route, withRouter } from 'react-router-dom';
import AddJob from './components/addJob';
import { refreshAuthToken } from './actions/auth-actions/auth';
class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={props => <JobList {...props} />} />
        <Route exact path="/signup" component={RegistrationPage} />
        <Route exact path="/add" component={AddJob} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
