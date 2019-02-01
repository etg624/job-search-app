import React from 'react';
import './card.css';

function JobCard() {
  return (
    <div className="job-card">
      <section className="job-desc">
        <h2 className="job-title">Job 1</h2>
        <p className="job-details">
          Software engineer for a pretty cool company
        </p>
        <div className="location-pay">
          <p>Los Angeles</p>
          <p>$25-$30 an hr</p>
        </div>
      </section>
      <form className="job-form">
        <textarea
          rows="4"
          className="job-notes"
          placeholder="Some notes about the job"
        />
        <button className="schedule button" type="submit">
          Schedule
        </button>
        <button className="schedule button" type="submit">
          Save Note
        </button>
        <span className="checkbox">
          <input type="checkbox" />
          Applied?
        </span>
      </form>
    </div>
  );
}

export default JobCard;
