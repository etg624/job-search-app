import { API_BASE_URL } from '../../config';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const getCommentsRequest = () => ({
  type: GET_COMMENTS_REQUEST
});

export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const getCommentsSuccess = jobs => ({
  type: GET_COMMENTS_SUCCESS,
  jobs
});

export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';
export const getCommentsError = error => ({
  type: GET_COMMENTS_ERROR,
  error
});

export const fetchComments = comments => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getCommentsRequest());

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
      return dispatch(getCommentsSuccess(data));
    })
    .catch(err => dispatch(getCommentsError(err)));
};
