import dialogPolyfill from 'dialog-polyfill';
import {
  getComments,
  postComments,
} from './api';

import {
  displayCommentsCounter,
} from './counters';

import displayBanner from './banner';

const dialog = document.querySelector('#dialog');
dialogPolyfill.registerDialog(dialog);

const commentsList = document.querySelector('.comments-list');
const bannerElement = document.querySelector('#popup-banner');

const displayError = () => {
  const commentMessage = document.createElement('li');
  commentMessage.className = 'no-comments';
  commentMessage.textContent = 'No Comments';
  commentsList.append(commentMessage);
};

const displayComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment';
  commentElement.textContent = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
  commentsList.append(commentElement);
};

const displayComments = async (showId) => {
  commentsList.innerHTML = '';

  try {
    const comments = await getComments(showId);
    comments.forEach((comment) => displayComment(comment));
    displayCommentsCounter(dialog, commentsList);
  } catch (error) {
    displayError();
  }
};

const validateComment = (name, comment) => name.value !== '' && comment.value !== '';

const inputComment = async () => {
  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#comment-input');
  if (validateComment(nameInput, commentInput)) {
    const commentObj = {
      item_id: `${commentsList.id}`,
      username: `${nameInput.value.trim()}`,
      comment: `${commentInput.value.trim()}`,
    };
    nameInput.value = '';
    commentInput.value = '';
    await postComments(commentObj);
    displayComments(commentsList.id);
  }
};

const popup = (e) => {
  commentsList.innerHTML = '';
  dialog.showModal();

  const showElement = e.target.parentNode.parentNode;
  const showId = showElement.id;
  commentsList.id = showId;

  const mazeId = showElement.getAttribute('data-mazeid');
  displayBanner(bannerElement, mazeId);

  const summaryElement = document.querySelector('#dialog-summary');
  summaryElement.innerHTML = showElement.querySelector('#summary').innerHTML;

  displayComments(showId);

  const commentBtn = document.querySelector('#btn-comment');
  commentBtn.addEventListener('click', async (e) => inputComment(e));
};

const startComment = () => {
  const comments = document.querySelectorAll('.comments');
  const closeButton = document.querySelector('#close');

  Array.from(comments, (a) => a.addEventListener('click', (e) => popup(e)));

  closeButton.addEventListener('click', () => {
    dialog.close();
    commentsList.innerHTML = '';
    bannerElement.src = '';
    document.querySelector('#comments-header').textContent = 'Comments';
  });
};

export default startComment;
