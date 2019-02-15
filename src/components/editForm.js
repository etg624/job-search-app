import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { updateJob } from '../actions/job-actions/updateJobs';
import requiresLogin from '../components/auth/requires-login';
import { getJobById } from '../actions/job-actions/getJobById';
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
          <label htmlFor="title">Job Title</label>
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
            Clear Fields
          </button>
        </div>
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
