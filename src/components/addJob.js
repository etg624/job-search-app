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
      <form
        className="add-job-form"
        onSubmit={handleSubmit(values => this.onSubmit(values))}
      >
        <div>
          <label htmlFor="title">Job Title</label>
          <Field
            id="title"
            name="title"
            component={Input}
            type="text"
            placeholder="Enter a title"
            validate={[required]}
          />
        </div>

        <div>
          <label htmlFor="dateApplied">Date Applied</label>
          <Field
            id="dateApplied"
            name="dateApplied"
            component={Input}
            type="date"
            placeholder="Select the date you applied"
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>

          <Field
            id="location"
            name="location"
            component="input"
            type="text"
            placeholder="Where is the job?"
          />
        </div>

        <div>
          <label htmlFor="adLink">Ad Link</label>

          <Field
            id="adLink"
            name="adLink"
            component="input"
            type="text"
            placeholder="Link for the ad of job"
          />
        </div>

        <div>
          <label htmlFor="companyLink">Company Site</label>

          <Field
            id="companyLink"
            name="companyLink"
            component="input"
            type="text"
            placeholder="Company Website"
          />
        </div>

        <div>
          <label htmlFor="pay">Pay</label>

          <Field
            id="pay"
            name="pay"
            component="input"
            type="text"
            placeholder="How much does the job pay?"
          />
        </div>

        <div>
          <label className="description" htmlFor="description">
            Description
          </label>

          <Field
            id="description"
            name="description"
            component="textarea"
            type="text"
            placeholder="Enter a description about this job"
          />
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

export default withRouter(
  requiresLogin()(
    reduxForm({
      form: 'addJobForm'
    })(AddJob)
  )
);
