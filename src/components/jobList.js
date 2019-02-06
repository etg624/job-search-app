import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/auth-actions/protected-data';
import JobCard from './jobCard';
import requiresLogin from '../components/auth/requires-login';

class JobList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    const jobs = this.props.jobs.map((job, index) => (
      <li key={index}>
        <JobCard {...job} form={`${index}jobForm`} />
      </li>
    ));
    return <ul>{jobs}</ul>;
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    jobs: state.job.jobs,
    loading: state.job.loading,
    error: state.job.error
  };
};
export default requiresLogin()(connect(mapStateToProps)(JobList));
