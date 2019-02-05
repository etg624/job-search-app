import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddJob extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form>
        <div>
          <label>Job Title</label>
          <div>
            <Field
              name="jobTitle"
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
              name="comment"
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

export default reduxForm({
  form: 'addJobForm'
})(AddJob);
