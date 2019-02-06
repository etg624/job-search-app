import {
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR
} from '../actions/getJobs';

import {
  ADD_JOB_SUCCESS,
  ADD_JOB_REQUEST,
  ADD_JOB_ERROR
} from '../actions/postJobs';

import { POST_COMMENT_SUCCESS } from '../actions/postComments';
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
      loading: null,
      error: action.error
    };
  } else if (action.type === POST_COMMENT_SUCCESS) {
    console.log(action);
    return {
      ...state,
      jobs: state.jobs.map(job => {
        if (action.id === job._id) {
          job.comments = [...job.comments, action.newComment.comments];
        }

        return job;
      })
    };
  }
  return state;
}
