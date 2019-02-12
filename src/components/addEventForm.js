import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postEvent } from '../actions/event-actions/postEvents';
import requiresLogin from '../components/auth/requires-login';
import { withRouter } from 'react-router-dom';
import './styles/addJob.css';
import { required } from './auth/validators';

class AddEventForm extends Component {
  onSubmit = values => {
    this.props.dispatch(postEvent(values));
    this.props.history.push('/schedule');
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
            <label>Event Title</label>
            <div>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Enter a title"
                validate={[required]}
              />
            </div>
          </div>
          <div>
            <label>Stat Date</label>
            <div>
              <Field
                name="startDate"
                component="input"
                type="date"
                placeholder="Select a start date "
                validate={[required]}
              />
            </div>
          </div>
          <div>
            <label>End Date</label>
            <div>
              <Field name="endDate" component="input" type="date" />
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
