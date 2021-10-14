import { postLikes, getLikes } from './api';

const itemsID = (element) => element.parentNode.parentNode.parentNode.id;

const displayLikes = async () => {
  const likesData = await getLikes();
  const likesCount = document.querySelectorAll('.likes-count');

  likesCount.forEach((likes) => {
    const id = itemsID(likes);

    likesData.forEach((item) => {
      if (item.item_id === id) likes.innerHTML = item.likes;
    });
  });
};

const UpdateLike = async (target, id) => {
  const likesData = await getLikes();
  const likes = target.parentNode.lastElementChild;

  likesData.forEach((item) => {
    if (item.item_id === id) likes.innerHTML = item.likes;
  });
};

const addLikes = () => {
  const likeButtons = document.querySelectorAll('.heart.icon');

  likeButtons.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const id = itemsID(e.target);
      postLikes({ item_id: id })
        .then((response) => {
          if (response === 'Created') {
            UpdateLike(e.target, id);
          }
        });
    });
  });
};

export {
  addLikes, displayLikes,
};
