import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postComment } from '../actions/comment-actions/postComments';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../actions/job-actions/getJobs';
import { deleteJob } from '../actions/job-actions/deleteJob';
import './card.css';

class JobCard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }
  render() {
    const comments = this.props.comments.map((comment, i) => {
      console.log(comment);
      return <li key={i}>{comment.content}</li>;
    });
    return (
      <div className="job-card">
        <section className="job-desc">
          <h2 className="job-title">{this.props.title}</h2>
          <p className="job-details">{this.props.description}</p>
          <div className="location-pay">
            <p>{this.props.location}</p>
            <p>{this.props.pay}</p>
            <Link to={'/edit/' + this.props.id}>Edit Job</Link>
            <button
              onClick={() => {
                console.log(this.props.id);
                return this.props.dispatch(deleteJob(this.props.id));
              }}
            >
              Delete Job
            </button>
          </div>
        </section>
        <form
          className="job-form"
          onSubmit={this.props.handleSubmit(value => {
            console.log(value);
            return this.props.dispatch(postComment(value, this.props.id));
          })}
        >
          <Field
            name="content"
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
}

export default reduxForm({
  form: 'jobCardForm'
})(JobCard);
