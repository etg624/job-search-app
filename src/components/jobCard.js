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
    const {
      dispatch,
      id,
      title,
      description,
      handleSubmit,
      location,
      pay,
      events,
      comments,
      adLink,
      companyLink,
      dateApplied
    } = this.props;

    const formattedApplyDate = moment(dateApplied)
      .add(12, 'hours')
      .format('MMMM Do');
    const checkLink = link => {
      if (link) {
        return link.includes('https://')
          ? link
          : link.replace(link, `https://${link}`);
      }
    };
    const commentsToRender = comments || [];
    const mappedComments = commentsToRender.map((comment, i) => {
      return (
        <li key={i}>
          {comment.content}
          <span>
            <i
              className="fas fa-trash-alt"
              onClick={() => dispatch(deleteComment(comment.id, id))}
            />
          </span>
        </li>
      );
    });

    const eventsToRender = events || [];
    const mappedEvents = eventsToRender.map((event, i) => {
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
            <h4
              className="color-coded-title"
              style={{ backgroundColor: `#${event.color}`, color: 'white' }}
            >
              {event.title}
            </h4>
            <p className="event-dates">
              {start}
              <span>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => dispatch(deleteEvent(event.id, id))}
                />
              </span>
            </p>
          </li>
        );
      }

      return (
        <li key={i} className="events-list">
          <h4
            className="color-coded-title"
            style={{ backgroundColor: `#${event.color}`, color: 'white' }}
          >
            {event.title}
          </h4>
          <p className="event-dates">
            {start} &mdash; {end}
            <span>
              <i
                className="fas fa-trash-alt"
                onClick={() => dispatch(deleteEvent(event.id, id))}
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
            <h2 className="job-title">{title}</h2>
            <Link role="link" className="edit-link" to={`/edit/${id}`}>
              Edit Job
            </Link>
          </header>
          <div className="job-description">
            <p className="job-details">{description}</p>
            <div>
              {dateApplied ? (
                <div className="applied-on">
                  <p className="applied-on-text">
                    Applied on:{' '}
                    <span className="bold">{formattedApplyDate}</span>
                  </p>
                </div>
              ) : (
                <div className="applied-on bold">You have yet to apply</div>
              )}
            </div>

            <div className="links">
              <span>Link to the ad:</span>{' '}
              <a className="bold" href={checkLink(adLink)}>
                {adLink}
              </a>
            </div>
            <div className="links">
              <span>Company Site:</span>{' '}
              <a className="bold" href={checkLink(companyLink)}>
                {companyLink}
              </a>
            </div>
            <div className="job-location-pay">
              <p className="bold">{location}</p>
              <p className="bold">{pay}</p>
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
              type="submit"
              onClick={handleSubmit(value => {
                return dispatch(postComment(value, id));
              })}
            >
              Post comment
            </button>
            <ul className="comments">{mappedComments}</ul>
            <ul className="events">{mappedEvents}</ul>
          </div>
          <div className="schedule-delete-buttons">
            <Link
              role="link"
              to={{
                pathname: '/eventForm',
                state: {
                  jobId: id
                }
              }}
              className="schedule-button button"
              type="button"
            >
              Create Event
            </Link>

            <button
              className="delete-button button"
              onClick={handleSubmit(() => {
                dispatch(deleteJob(this.props.id));
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
