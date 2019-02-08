import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import EditComment from '../components/editComment';
import { postComment } from '../actions/comment-actions/postComments';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../actions/job-actions/getJobs';
import { deleteJob } from '../actions/job-actions/deleteJob';
import { deleteComment } from '../actions/comment-actions/deleteComments';
import { editCommentButton } from '../actions/comment-actions/editComment';
import './card.css';

class JobCard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }
  render() {
    const commentId = this.props.comments.find(comment => comment.id);

    const comments = this.props.comments.map((comment, i) => {
      return (
        <li key={i}>
          {comment.content}
          <span>
            <i
              className="fas fa-edit"
              onClick={() => this.props.dispatch(editCommentButton())}
            />
            <i
              className="fas fa-trash-alt"
              onClick={() => this.props.dispatch(deleteComment(commentId.id))}
            />
          </span>
        </li>
      );
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
                this.props.dispatch(deleteJob(this.props.id));
              }}
            >
              Delete Job
            </button>
          </div>
        </section>
        <form className="job-form">
          <Field
            name="content"
            component="input"
            type="text"
            placeholder="Enter a comment"
          />
          <button
            className="comment button"
            type="button"
            onClick={this.props.handleSubmit(value => {
              console.log(value);
              return this.props.dispatch(postComment(value, this.props.id));
            })}
          >
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
            <ul>{this.props.editComment ? <EditComment /> : comments}</ul>
          </div>
        </form>
      </div>
    );
  }
}

JobCard.defaultProps = {
  comments: []
};

export default reduxForm({
  form: 'jobCardForm'
})(JobCard);
