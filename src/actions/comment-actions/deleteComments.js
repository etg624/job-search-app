import { API_BASE_URL } from '../../config';

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const deleteCommentRequest = () => ({
  type: DELETE_COMMENT_REQUEST
});
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const deleteCommentSuccess = deletedCommentId => ({
  type: DELETE_COMMENT_SUCCESS,
  deletedCommentId
});
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';
export const deleteCommentError = error => ({
  type: DELETE_COMMENT_ERROR,
  error
});

export const deleteComment = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteCommentRequest());
  fetch(`${API_BASE_URL}/comments/${id}`, {
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
      dispatch(deleteCommentSuccess(id));
    })
    .catch(err => {
      dispatch(deleteCommentError(err));
    });
};
