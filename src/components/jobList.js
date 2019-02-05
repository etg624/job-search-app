import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchJobs } from '../actions/getJobs';
import JobCard from './jobCard';

class JobList extends Component {
  // componentWillMount() {
  //   return this.props.dispatch(fetchJobs(this.props.jobs));
  // }

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
  return {
    jobs: state.job.jobs,
    loading: state.job.loading,
    error: state.job.error
  };
};
export default connect(mapStateToProps)(JobList);
