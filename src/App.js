import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import LandingPage from './components/landing-page';
import JobList from './components/jobList';
import RegistrationPage from './components/auth/registration-page';
import { Route } from 'react-router-dom';
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
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/add" component={AddJob} />
      </div>
    );
  }
}

export default App;
