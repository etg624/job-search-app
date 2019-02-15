import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postComment } from '../actions/comment-actions/postComments';
import { Link } from 'react-router-dom';
import { deleteJob } from '../actions/job-actions/deleteJob';
import { deleteComment } from '../actions/comment-actions/deleteComments';
import { deleteEvent } from '../actions/event-actions/deleteEvents';
import moment from 'moment';
import './styles/card.css';
export class JobCard extends Component {
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

    const eventsToRender = this.props.events || [];
    const events = eventsToRender.map((event, i) => {
      const start = moment(event.start)
        .add(12, 'hours')
        .format('MMMM Do');
      const end = moment(event.end)
        .add(12, 'hours')
        .format('MMMM Do');

      if (start > end) {
        return '';
      }

      if (start === end) {
        return (
          <li key={i} className="events-list">
            <h4>{event.title}</h4>
            <p className="event-dates">
              {start}
              <span>
                <i
                  className="fas fa-trash-alt"
                  onClick={() =>
                    this.props.dispatch(deleteEvent(event.id, this.props.id))
                  }
                />
              </span>
            </p>
          </li>
        );
      }

      return (
        <li key={i} className="events-list">
          <h4>{event.title}</h4>
          <p className="event-dates">
            {start} &mdash; {end}
            <span>
              <i
                className="fas fa-trash-alt"
                onClick={() =>
                  this.props.dispatch(deleteEvent(event.id, this.props.id))
                }
              />
            </span>
          </p>
        </li>
      );
    });

    return (
      <div className="job-card">
        <section>
          <header className="job-header">
            <h2 className="job-title">{this.props.title}</h2>
            <Link
              role="link"
              className="edit-link"
              to={`/edit/${this.props.id}`}
            >
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
            <label htmlFor="post-comment" />
            <Field
              id="post-comment"
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
                return this.props.dispatch(postComment(value, this.props.id));
              })}
            >
              Post comment
            </button>
            <ul className="comments">{comments}</ul>
            <ul className="events">{events}</ul>
          </div>
          <div className="schedule-delete-buttons">
            <Link
              role="link"
              to={{
                pathname: '/eventForm',
                state: {
                  jobId: this.props.id
                }
              }}
              className="schedule-button button"
              type="submit"
            >
              Create Event
            </Link>

            <button
              className="delete-button button"
              onClick={this.props.handleSubmit(() => {
                this.props.dispatch(deleteJob(this.props.id));
              })}
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
