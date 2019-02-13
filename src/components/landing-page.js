import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/auth/login-form';
import PreLoginHeader from './auth/preLoginHeader';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="home">
      <PreLoginHeader />
      <div className="app-description">
        <h3>Organize your job search</h3>
        <p>
          Begin searching for your new career and add potential job
          opportunities to your list of jobs, then create events for each job,
          such as the date of an interview, or create a reminder to follow up
          with an employer.
        </p>
      </div>

      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
