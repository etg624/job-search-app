import { API_BASE_URL } from '../config';

import { getJobById } from './getJobById';

export const UPDATE_JOB_REQUEST = 'UPDATE_JOB_REQUEST';
export const updateJobRequest = () => ({
  type: UPDATE_JOB_REQUEST
});

export const UPDATE_JOB_SUCCESS = 'UPDATE_JOB_SUCCESS';
export const updateJobSuccess = (updatedJob, id) => ({
  type: UPDATE_JOB_SUCCESS,
  updatedJob
});

export const UPDATE_JOB_ERROR = 'UPDATE_JOB_ERROR';
export const updateJobError = error => ({
  type: UPDATE_JOB_ERROR,
  error
});

export const updateJob = (id, updatedJob) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(updateJobRequest());

  fetch(`${API_BASE_URL}/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedJob),
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      return dispatch(updateJobSuccess(data));
    })
    .catch(err => dispatch(updateJobError(err)));
};
