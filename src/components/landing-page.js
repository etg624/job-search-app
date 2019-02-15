import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import calendarWithEvents from '../screenshots/calendarWithEvents.png';
import jobCards from '../screenshots/jobCards.png';
import LoginForm from '../components/auth/login-form';
import PreLoginHeader from './auth/preLoginHeader';
import './styles/landing.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="home-container">
      <PreLoginHeader />
      <div className="app-description">
        <h3>Organize your job search</h3>

        <p>
          Begin searching for your new career and add potential job
          opportunities to your list of jobs, then create events for each job,
          such as the date of an interview, or create a reminder to follow up
          with an employer.
        </p>
        <div className="pics ">
          <img
            className="pic calendarImg"
            src={calendarWithEvents}
            alt="a calendar with events"
          />
          <img
            className="pic cardImg"
            src={jobCards}
            alt="multiple cards with descriptions of jobs"
          />
        </div>
      </div>

      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
