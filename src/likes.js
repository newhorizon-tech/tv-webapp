import { postLikes, getLikes } from './api';

const itemsID = (element) => element.parentNode.parentNode.parentNode.id;

const displayLikes = async () => {
  const likesData = await getLikes();
  const likesCount = document.querySelectorAll('.likes-count');
  let id;

  likesCount.forEach((likes) => {
    id = itemsID(likes);

    likesData.forEach((item) => {
      if (item.item_id === id) likes.innerHTML = item.likes;
    });
  });
};

const addLikes = () => {
  const likeButtons = document.querySelectorAll('.heart.icon');
  let id;

  likeButtons.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      id = itemsID(e.target);
      postLikes({ item_id: id })
        .then((response) => {
          if (response === 'Created') window.location.reload();
        });
    });
  });
};

export {
  addLikes, displayLikes,
};
