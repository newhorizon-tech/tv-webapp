import { postLikes } from './api';

const addLikes = (id = 1) => {
  const heart = document.querySelector('.heart.icon');
  let id;

  heart.addEventListener('click', (e) => {
    id = e.target.parentNode.parentNode.parentNode.id;
    const json = {
      "item_id": `item${id}`,
    }

    postLikes(json);
  });
};

export {
    addLikes,
};
