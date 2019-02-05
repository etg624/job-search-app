import { API_BASE_URL } from '../config';

export const ADD_JOB_REQUEST = 'ADD_JOB_REQUEST';
export const addJobRequest = () => ({
  type: ADD_JOB_REQUEST
});

export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const addJobSuccess = newJob => ({
  type: ADD_JOB_SUCCESS,
  newJob
});

export const ADD_JOB_ERROR = 'ADD_JOB_ERROR';
export const addJobError = error => ({
  type: ADD_JOB_ERROR,
  error
});

export const addJob = newJob => dispatch => {
  dispatch(addJobRequest());
  fetch(`${API_BASE_URL}/jobs`, {
    method: 'POST',
    body: JSON.stringify(newJob),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => Promise.reject(err));
      }
      return res.json().then(data => dispatch(addJobSuccess(data)));
    })
    .catch(err => {
      dispatch(addJobError(err));
    });
};
