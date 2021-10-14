import dialogPolyfill from 'dialog-polyfill';
import {
  getComments,
  postComments,
} from './api';

const dialog = document.querySelector('#dialog');
dialogPolyfill.registerDialog(dialog);

const commentsList = document.querySelector('#comments-list');

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
  const showId = e.target.parentNode.parentNode.id;
  commentsList.id = showId;

  dialog.showModal();

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
  });
};

export default startComment;
