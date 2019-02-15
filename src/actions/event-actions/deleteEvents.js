import { API_BASE_URL } from '../../config';

export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST';
export const deleteEventRequest = () => ({
  type: DELETE_EVENT_REQUEST
});
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const deleteEventSuccess = (deletedEventId, jobId) => ({
  type: DELETE_EVENT_SUCCESS,
  deletedEventId,
  jobId
});
export const DELETE_EVENT_ERROR = 'DELETE_EVENT_ERROR';
export const deleteEventError = error => ({
  type: DELETE_EVENT_ERROR,
  error
});

export const deleteEvent = (eventId, jobId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteEventRequest());
  fetch(`${API_BASE_URL}/events/${eventId}`, {
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
      dispatch(deleteEventSuccess(eventId, jobId));
    })
    .catch(err => {
      dispatch(deleteEventError(err));
    });
};
