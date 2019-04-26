import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { updateJob } from '../actions/job-actions/updateJobs';
import requiresLogin from '../components/auth/requires-login';
import { getJobById } from '../actions/job-actions/getJobById';
import Input from './input';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/editForm.css';
class EditForm extends Component {
  componentDidMount() {
    this.props.dispatch(getJobById(this.props.match.params.id));
  }

  onSubmit = values => {
    this.props
      .dispatch(updateJob(this.props.match.params.id, values))
      .then(() => this.props.history.push('/home'));
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form
        className="edit-form"
        onSubmit={handleSubmit(values => this.onSubmit(values))}
      >
        <div>
          <label htmlFor="edit-job-title">Job Title</label>
          <Field
            id="edit-job-title"
            name="title"
            component="input"
            type="text"
            placeholder="Enter a title"
          />
        </div>

        <div>
          <label htmlFor="title">Date Applied</label>
          <Field
            id="dateApplied"
            name="dateApplied"
            component={Input}
            type="date"
            placeholder="Select the date you applied"
          />
        </div>

        <div>
          <label htmlFor="edit-location">Location</label>
          <Field
            id="edit-location"
            name="location"
            component="input"
            type="text"
            placeholder="Where is the job?"
          />
        </div>

        <div>
          <label htmlFor="location">Ad Link</label>

          <Field
            id="adLink"
            name="adLink"
            component="input"
            type="text"
            placeholder="Link for the ad of job"
          />
        </div>

        <div>
          <label htmlFor="location">Company Site</label>

          <Field
            id="companyLink"
            name="companyLink"
            component="input"
            type="text"
            placeholder="Company Website"
          />
        </div>

        <div>
          <label htmlFor="edit-pay">Pay</label>
          <Field
            name="edit-pay"
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

        <fieldset>
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
            Clear Fields
          </button>
        </fieldset>
      </form>
    );
  }
}

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
