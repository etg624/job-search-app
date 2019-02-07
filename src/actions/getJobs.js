import { API_BASE_URL } from '../config';

export const GET_JOB_REQUEST = 'GET_JOB_REQUEST';
export const getJobRequest = () => ({
  type: GET_JOB_REQUEST
});

export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const getJobSuccess = jobs => ({
  type: GET_JOB_SUCCESS,
  jobs
});

export const GET_JOB_ERROR = 'GET_JOB_ERROR';
export const getJobError = error => ({
  type: GET_JOB_ERROR,
  error
});

export const fetchJobs = jobs => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getJobRequest());

  fetch(`${API_BASE_URL}/jobs`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      return dispatch(getJobSuccess(data));
    })
    .catch(err => dispatch(getJobError(err)));
};
