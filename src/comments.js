import dialogPolyfill from 'dialog-polyfill';
import { getComments } from './api';

const dialog = document.querySelector('#dialog');
dialogPolyfill.registerDialog(dialog);

const commentsList = document.querySelector('#comments-list');

const displayComments = async (e) => {
  commentsList.innerHTML = '';
  const showId = e.target.parentNode.parentNode.id;
  dialog.showModal();

  try {
    const comments = await getComments(showId);
    comments.forEach((comment) => {
      const commentElement = document.createElement('li');
      commentElement.className = 'comment';
      commentElement.textContent = `${comment.username} : ${comment.comment}`;
      commentsList.append(commentElement);
    });
  } catch (error) {
    const commentMessage = document.createElement('li');
    commentMessage.className = 'no-comments';
    commentMessage.textContent = 'No Comments';
    commentsList.append(commentMessage);
  }
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
