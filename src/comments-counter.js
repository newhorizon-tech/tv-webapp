const commentsCounter = (commentsList) => {
  const comments = commentsList.querySelectorAll('.comment');
  return comments.length;
};

export default commentsCounter;
