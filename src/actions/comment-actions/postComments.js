import { API_BASE_URL } from '../../config';

export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST';
export const postCommentRequest = () => ({
  type: POST_COMMENT_REQUEST
});

export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const postCommentSuccess = (newComment, id) => ({
  type: POST_COMMENT_SUCCESS,
  newComment,
  id
});

export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';
export const postCommentError = error => ({
  type: POST_COMMENT_ERROR,
  error
});

export const postComment = (comment, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const newComment = {
    jobId: id,
    comment: comment
  };
  dispatch(postCommentRequest());
  fetch(`${API_BASE_URL}/comments`, {
    method: 'POST',
    body: JSON.stringify(newComment),
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
      console.log('DATA', data);
      return dispatch(postCommentSuccess(data, data.userId));
    })
    .catch(err => dispatch(postCommentError(err)));
};
