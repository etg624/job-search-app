import { API_BASE_URL } from '../../config';

export const POST_EVENT_REQUEST = 'POST_EVENT_REQUEST';
export const postEventRequest = () => ({
  type: POST_EVENT_REQUEST
});

export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS';
export const postEventSuccess = (newEvent, jobId) => ({
  type: POST_EVENT_SUCCESS,
  newEvent,
  jobId
});

export const POST_EVENT_ERROR = 'POST_EVENT_ERROR';
export const postEventError = error => ({
  type: POST_EVENT_ERROR,
  error
});

export const postEvent = (event, jobId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const newEvent = {
    jobId,
    event
  };
  dispatch(postEventRequest());
  fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    body: JSON.stringify(newEvent),
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
    .then(newEvent => {
      return dispatch(postEventSuccess(newEvent, jobId));
    })
    .catch(err => dispatch(postEventError(err)));
};
