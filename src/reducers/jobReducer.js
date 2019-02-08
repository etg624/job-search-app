import {
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR
} from '../actions/job-actions/getJobs';

import {
  ADD_JOB_SUCCESS,
  ADD_JOB_REQUEST,
  ADD_JOB_ERROR
} from '../actions/job-actions/postJobs';

import {
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR
} from '../actions/job-actions/updateJobs';

import {
  GET_JOB_BY_ID_REQUEST,
  GET_JOB_BY_ID_SUCCESS,
  GET_JOB_BY_ID_ERROR
} from '../actions/job-actions/getJobById';
import {
  DELETE_JOB_ERROR,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS
} from '../actions/job-actions/deleteJob';
import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR
} from '../actions/comment-actions/postComments';
import { EDIT_COMMENT_BUTTON } from '../actions/comment-actions/editComment';
import {
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS
} from '../actions/comment-actions/deleteComments';
const initialState = {
  jobs: [],
  editComment: false,
  loading: false,
  error: null
};

export function jobReducer(state = initialState, action) {
  if (action.type === GET_JOB_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === GET_JOB_SUCCESS) {
    return {
      ...state,
      jobs: action.jobs,
      loading: false,
      error: null
    };
  } else if (action.type === GET_JOB_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === ADD_JOB_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === ADD_JOB_SUCCESS) {
    return {
      ...state
      // jobs: action.newJob
    };
  } else if (action.type === ADD_JOB_ERROR) {
    return {
      ...state,
      loading: null,
      error: action.error
    };
  } else if (action.type === UPDATE_JOB_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === UPDATE_JOB_SUCCESS) {
    return {
      ...state,
      job: state.jobs.map((job, index) => {
        if (job.id === action.updatedJob.id) {
          return action.updatedJob;
        }
        return job;
      })
    };
  } else if (action.type === UPDATE_JOB_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === GET_JOB_BY_ID_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === GET_JOB_BY_ID_SUCCESS) {
    return {
      ...state,
      job: action.job
    };
  } else if (action.type === GET_JOB_BY_ID_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === DELETE_JOB_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === DELETE_JOB_SUCCESS) {
    const newJobs = state.jobs.filter(job => {
      return job.id !== action.deletedJobId;
    });
    return {
      ...state,
      jobs: newJobs
    };
  } else if (action.type === DELETE_JOB_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === POST_COMMENT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === POST_COMMENT_SUCCESS) {
    const jobs = state.jobs.map(job => {
      if (job.id === action.jobId) {
        job.comments = [...job.comments, action.newComment];
      }

      return job;
    });
    return {
      ...state,
      jobs
    };
  } else if (action.type === POST_COMMENT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === EDIT_COMMENT_BUTTON) {
    return {
      ...state,
      editComment: !state.editComment
    };
  } else if (action.type === DELETE_COMMENT_REQUEST) {
    return {
      ...state,
      loading: this,
      error: null
    };
  } else if (action.type === DELETE_COMMENT_SUCCESS) {
    const jobs = state.jobs.map(job => {
      if (job.id === action.jobId) {
        job.comments = job.comments.filter(
          comment => comment.id !== action.deletedCommentId
        );
      }

      return job;
    });
    return {
      ...state,
      jobs
    };
  } else if (action.type === DELETE_COMMENT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
}
