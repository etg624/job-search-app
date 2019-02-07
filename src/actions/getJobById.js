import { API_BASE_URL } from '../config';

export const GET_JOB_BY_ID_REQUEST = 'GET_JOB_BY_ID_REQUEST';
export const getJobByIdRequest = () => ({
  type: GET_JOB_BY_ID_REQUEST
});

export const GET_JOB_BY_ID_SUCCESS = 'GET_JOB_BY_ID_SUCCESS';
export const getJobByIdSuccess = job => ({
  type: GET_JOB_BY_ID_SUCCESS,
  job
});

export const GET_JOB_BY_ID_ERROR = 'GET_JOB_BY_ID_ERROR';
export const getJobByIdError = error => ({
  type: GET_JOB_BY_ID_ERROR,
  error
});

export const getJobById = id => (dispatch, getState) => {
  dispatch(getJobByIdRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/jobs/${id}`, {
    headers: { Authorization: `Bearer ${authToken}` }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    })
    .then(data => dispatch(getJobByIdSuccess(data)))
    .catch(err => dispatch(getJobByIdError(err)));
};
