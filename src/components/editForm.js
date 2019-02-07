import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { updateJob } from '../actions/job-actions/updateJobs';
import requiresLogin from '../components/auth/requires-login';
import { getJobById } from '../actions/job-actions/getJobById';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class EditForm extends Component {
  componentDidMount() {
    this.props.dispatch(getJobById(this.props.match.params.id));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form
        onSubmit={handleSubmit(values => {
          return this.props.dispatch(
            updateJob(this.props.match.params.id, values)
          );
        })}
      >
        <div>
          <label>Job Title</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Enter a title"
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Enter a description about this job"
            />
          </div>
        </div>
        {/* <div>
          <label>Write A Comment</label>
          <div>
            <Field
              name={['comments']}
              component="input"
              type="text"
              placeholder="Write a comment"
            />
          </div>
        </div>*/}
        <div>
          <label>Location</label>
          <div>
            <Field
              name="location"
              component="input"
              type="text"
              placeholder="Where is your the job?"
            />
          </div>
        </div>
        <div>
          <label>Pay</label>
          <div>
            <Field
              name="pay"
              component="input"
              type="text"
              placeholder="How much does the job pay?"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

// AddJob.defaultProps = {
//   comments: []
// };

const mapStateToProps = state => {
  return {
    initialValues: state.jobs.job
  };
};

export default withRouter(
  requiresLogin()(
    reduxForm({
      form: 'editForm',
      enableReinitialize: true
    })(connect(mapStateToProps)(EditForm))
  )
);