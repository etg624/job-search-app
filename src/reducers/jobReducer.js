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
const initialState = {
  jobs: [],
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
        console.log('from reducer', action.updatedJob.id);
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
  } else if (GET_JOB_BY_ID_ERROR) {
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
      console.log(action.deletedJob.id);
      console.log(job.id);
      return job.id !== action.deletedJob.id;
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
    console.log('REQUEST');
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === POST_COMMENT_SUCCESS) {
    console.log('HELLO FROM REDUCER');
    return {
      ...state,
      jobs: state.jobs.map(job => {
        console.log('HELLO FROM REDUCER', job);
        if (action.id === job._id) {
          job.comments = [...job.comments, action.newComment.comments];
        }

        return job;
      })
    };
  } else if (action.type === POST_COMMENT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
}
