import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/auth-actions/protected-data';
import { fetchJobs } from '../actions/job-actions/getJobs';
import JobCard from './jobCard';
import requiresLogin from '../components/auth/requires-login';
import './styles/job-list.css';

class JobList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs(this.props.jobs));
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    const jobs = this.props.jobs.map((props, index) => {
      return (
        <li key={index}>
          <JobCard {...props} form={`${index}jobForm`} />
        </li>
      );
    });
    return <ul className="job-list">{jobs}</ul>;
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    jobs: state.jobs.jobs,
    loading: state.jobs.loading,
    error: state.jobs.error
  };
};
export default requiresLogin()(connect(mapStateToProps)(JobList));
