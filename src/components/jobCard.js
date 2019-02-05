import React from 'react';
import './card.css';

function JobCard(props) {
  function handleCommentPost(e) {
    e.preventDefault();
  }

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
      <form className="job-form">
        <p>{props.comments}</p>
        <input type="text" placeholder="Enter a comment" />
        <button className="schedule button" type="submit">
          Post comment
        </button>
        <button className="schedule button" type="submit">
          Schedule
        </button>
        <span className="checkbox">
          <input type="checkbox" checked={props.applied} />
          Applied?
        </span>
      </form>
    </div>
  );
}

export default JobCard;
