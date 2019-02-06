import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { postCommentSuccess } from '../actions/postComments';
import './card.css';

function JobCard(props) {
  const comments = props.comments.map((comment, i) => (
    <li key={i}>{comment}</li>
  ));

  return (
    <div className="job-card">
      <section className="job-desc">
        <h2 className="job-title">{props.title}</h2>
        <p className="job-details">{props.description}</p>
        <div className="location-pay">
          <p>{props.location}</p>
          <p>{props.pay}</p>
        </div>
      </section>
      <form
        className="job-form"
        onSubmit={props.handleSubmit(value =>
          props.dispatch(postCommentSuccess(value, props._id))
        )}
      >
        <Field
          name="comments"
          component="input"
          type="text"
          placeholder="Enter a comment"
        />
        <button className="comment button" type="submit">
          Post comment
        </button>
        <button className="schedule button" type="submit">
          Schedule
        </button>
        {/* <span>
          <Field name="applied" type="checkbox" />
          Applied?
        </span> */}
        <div>
          <ul>{comments}</ul>
        </div>
      </form>
    </div>
  );
}

JobCard.defaultProps = {};

export default reduxForm({
  form: 'jobCardForm'
})(JobCard);
