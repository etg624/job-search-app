import { API_BASE_URL } from '../config';

export const GET_JOB_REQUEST = 'GET_JOB_REQUEST';
export const getJobRequest = () => ({
  type: GET_JOB_REQUEST
});

export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const getJobSuccess = job => ({
  type: GET_JOB_SUCCESS,
  job
});

export const GET_JOB_ERROR = 'GET_JOB_ERROR';
export const getJobError = error => ({
  type: GET_JOB_ERROR,
  error
});

export const fetchJobs = job => dispatch => {
  dispatch(getJobRequest());
  fetch(`${API_BASE_URL}/jobs`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => data.map(job => dispatch(getJobSuccess(job))));
};
