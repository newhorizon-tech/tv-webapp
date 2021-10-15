import Storage from './storage';

const itemsCounter = () => {
  const cards = document.querySelectorAll('.tv-show-card');

  return cards.length;
};

const displayItemsCount = () => {
  let category = document.querySelector('.category-item.all');
  const active = Storage.getItem('active');

  if (active) {
    category = document.querySelector(`.category-item.${active}`);
    Storage.setItem('active', '');
  }

  const span = document.createElement('span');
  span.className = 'items-counter';
  span.innerHTML = ` (${itemsCounter()})`;
  category.style.color = '#808080';
  category.appendChild(span);
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

export {
  itemsCounter, commentsCounter, displayItemsCount, displayCommentsCounter,
};
