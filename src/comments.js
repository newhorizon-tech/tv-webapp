const dialog = document.querySelector('#dialog');

const displayComments = (event) => {
  dialog.showModal();
  console.log(event.target);
};

const startComment = () => {
  const comments = document.querySelectorAll('.comments');
  const closeButton = document.querySelector('#close');

  Array.from(comments, (a) => a.addEventListener('click', displayComments));

  closeButton.addEventListener('click', () => {
    dialog.close();
  });
};

export default startComment;
