import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobs';

function GetJobs(props) {
  function getJobs(e) {
    e.preventDefault();
    props.dispatch(fetchJobs());
  }

  return (
    <div>
      <button onClick={e => getJobs(e)}>GET Jobs</button>
    </div>
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(GetJobs);
