import { API_BASE_URL } from '../../config';

export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST';
export const deleteJobRequest = () => ({
  type: DELETE_JOB_REQUEST
});

export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const deleteJobSuccess = deletedJobId => ({
  type: DELETE_JOB_SUCCESS,
  deletedJobId
});

export const DELETE_JOB_ERROR = 'DELETE_JOB_ERROR';
export const deleteJobError = error => ({
  type: DELETE_JOB_ERROR,
  error
});

export const deleteJob = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteJobRequest());
  console.log(id);
  fetch(`${API_BASE_URL}/jobs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => Promise.reject(err));
      }
      return res;
    })
    .then(() => {
      dispatch(deleteJobSuccess(id));
    })
    .catch(err => {
      dispatch(deleteJobError(err));
    });
};
