import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobs';
import JobCard from './jobCard';

class JobList extends Component {
  // componentWillMount() {
  //   return this.props.dispatch(fetchJobs(this.props.jobs));
  // }

  render() {
    const jobs = this.props.jobs.map((job, index) => (
      <li key={index}>
        <JobCard {...job} />
      </li>
    ));
    return <ul>{jobs}</ul>;
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(JobList);
