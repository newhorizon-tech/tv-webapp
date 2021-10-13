import dialogPolyfill from 'dialog-polyfill';
import { getComments } from './api';

const dialog = document.querySelector('#dialog');
dialogPolyfill.registerDialog(dialog);

const commentsList = document.querySelector('#comment-list');

const displayComments = (e) => {
  const showId = e.target.parentNode.parentNode.id;
  const comments = getComments(showId);

  const comment = document.createElement('li');
  comment.className = 'comment';
  commentsList.append(comment);
  dialog.showModal();
};

const startComment = () => {
  const comments = document.querySelectorAll('.comments');
  const closeButton = document.querySelector('#close');

  Array.from(comments, (a) => a.addEventListener('click', (e) => displayComments(e)));

  closeButton.addEventListener('click', () => {
    dialog.close();
  });
};

export default startComment;
