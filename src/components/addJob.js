import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addJobSuccess } from '../actions/postJobs';

class AddJob extends Component {
  onSubmit(values) {
    return this.props.dispatch(addJobSuccess(values));
  }

  render() {
    console.log(this.props);
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
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
          <label>Write A Comment</label>
          <div>
            <Field
              name="comments"
              component="input"
              type="text"
              placeholder="Write a comment"
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

AddJob.defaultProps = {
  comments: []
};

export default reduxForm({
  form: 'addJobForm'
})(AddJob);
