import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addJob } from '../actions/job-actions/postJobs';
import requiresLogin from '../components/auth/requires-login';
import { withRouter } from 'react-router-dom';
import Input from './input';
import './styles/addJob.css';
import { required } from './auth/validators';

class AddJob extends Component {
  onSubmit = values => {
    this.props
      .dispatch(addJob(values))
      .then(() => this.props.history.push('/home'));
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form
          className="add-job-form"
          onSubmit={handleSubmit(values => this.onSubmit(values))}
        >
          <div>
            <div>
              <label htmlFor="title">Job Title</label>
              <Field
                name="title"
                component={Input}
                type="text"
                placeholder="Enter a title"
                validate={[required]}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description">Description</label>
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
            <label htmlFor="location">Location</label>
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
            <label htmlFor="pay">Pay</label>
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
      </div>
    );
  }
}

// AddJob.defaultProps = {
//   comments: []
// };

export default withRouter(
  requiresLogin()(
    reduxForm({
      form: 'addJobForm'
    })(AddJob)
  )
);
