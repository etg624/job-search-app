import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postEvent } from '../actions/event-actions/postEvents';
import requiresLogin from '../components/auth/requires-login';
import { withRouter } from 'react-router-dom';
import './styles/addJob.css';
import { required } from './auth/validators';
import Input from './input';

class AddEventForm extends Component {
  onSubmit = values => {
    this.props
      .dispatch(postEvent(values, this.props.location.state.jobId))
      .then(() => this.props.history.push('/home'));
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form
          className="add-job-form"
          onSubmit={handleSubmit(values => {
            this.onSubmit(values);
          })}
        >
          <div>
            <label htmlFor="title">Event Title</label>
            <Field
              name="title"
              component={Input}
              type="text"
              placeholder="Enter a title"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="start">Stat Date</label>
            <Field
              id="start"
              name="start"
              component={Input}
              type="date"
              validate={[required]}
            />
          </div>
          <div>
            <div>
              <label htmlFor="end">End Date</label>
              <Field
                id="end"
                name="end"
                component={Input}
                validate={[required]}
                type="date"
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
      form: 'addEventForm'
    })(AddEventForm)
  )
);
