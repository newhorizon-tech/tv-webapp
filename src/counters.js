const itemsCounter = () => {
  const cards = document.querySelectorAll('.tv-show-card');

  return cards.length;
};

const displayItemsCount = () => {
  const all = document.querySelector('.category-item.all');

  const span = document.createElement('span');
  span.className = 'items-counter';
  span.innerHTML = ` (${itemsCounter()})`;

  all.appendChild(span);
};

const commentsCounter = (commentsList) => {
  if (commentsList.tagName === 'UL') {
    const comments = commentsList.querySelectorAll('.comment');
    return comments.length;
  } return 'Invalid Input';
};

const displayCommentsCounter = (element, commentsList) => {
  const commentHeader = element.querySelector('#comments-header');
  commentHeader.textContent = `Comments (${commentsCounter(commentsList)})`;
};

export { displayItemsCount, commentsCounter, displayCommentsCounter };
