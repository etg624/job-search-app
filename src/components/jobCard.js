import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postComment } from '../actions/comment-actions/postComments';
import { Link } from 'react-router-dom';
import { deleteJob } from '../actions/job-actions/deleteJob';
import { deleteComment } from '../actions/comment-actions/deleteComments';
import './styles/card.css';
class JobCard extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  render() {
    const commentsToRender = this.props.comments || [];
    const comments = commentsToRender.map((comment, i) => {
      return (
        <li key={i}>
          {comment.content}
          <span>
            <i
              className="fas fa-trash-alt"
              onClick={() =>
                this.props.dispatch(deleteComment(comment.id, this.props.id))
              }
            />
          </span>
        </li>
      );
    });

    return (
      <div className="job-card">
        <section>
          <header className="job-header">
            <h2 className="job-title">{this.props.title}</h2>
            <Link className="edit-link" to={`/edit/${this.props.id}`}>
              Edit Job
            </Link>
          </header>
          <div className="job-description">
            <p className="job-details">{this.props.description}</p>
            <div className="job-location-pay">
              <p>{this.props.location}</p>
              <p>{this.props.pay}</p>
            </div>
          </div>
        </section>
        <form className="job-form">
          <div className="comment-container">
            <Field
              className="comment-input"
              name="content"
              component="input"
              type="text"
              placeholder="Enter a comment"
            />
            <button
              className="comment-button button"
              type="button"
              onClick={this.props.handleSubmit(value => {
                console.log(value);
                return this.props.dispatch(postComment(value, this.props.id));
              })}
            >
              Post comment
            </button>
            <ul className="comments">{comments}</ul>
          </div>
          <div className="schedule-delete-buttons">
            <Link
              to="/eventForm"
              className="schedule-button button"
              type="submit"
            >
              Schedule
            </Link>

            <button
              className="delete-button button"
              onClick={() => {
                this.props.dispatch(deleteJob(this.props.id));
              }}
            >
              Delete Job
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'jobCardForm'
})(JobCard);
