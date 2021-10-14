const commentsCounter = (commentsList) => {
  if (commentsList.tagName === 'UL') {
    const comments = commentsList.querySelectorAll('.comment');
    return comments.length;
  } return 'Invalid Input';
};

export default commentsCounter;
