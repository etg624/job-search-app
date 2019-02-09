import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addJob } from '../actions/job-actions/postJobs';
import requiresLogin from '../components/auth/requires-login';
import './styles/addJob.css';

class AddJob extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form
        className="add-job-form"
        onSubmit={handleSubmit(values => this.props.dispatch(addJob(values)))}
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
          <button
            className="form-button"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <button
            className="form-button"
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

export default requiresLogin()(
  reduxForm({
    form: 'addJobForm'
  })(AddJob)
);
