export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const postCommentSuccess = (newComment, id) => ({
  type: POST_COMMENT_SUCCESS,
  newComment,
  id
});
