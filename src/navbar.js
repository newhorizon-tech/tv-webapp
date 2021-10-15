import Storage from './storage';
import { loadSearch, refresh } from './home';

const addActive = (genre) => {
  Storage.setItem('active', genre);
};

const returnHome = () => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => refresh());
};

const handleGenres = (data) => {
  const categoryList = document.querySelectorAll('.category-item');

  categoryList.forEach((category) => {
    category.addEventListener('click', () => {
      const genre = category.classList[1];
      addActive(genre);
      let filter = [];

      switch (genre) {
        case 'all':
          refresh();
          break;

        case 'drama':
          filter = data.filter((show) => show.genres.includes('Drama')
            || show.genres.includes('Thriller')
            || show.genres.includes('Action')
            || show.genres.includes('Mystery'));

          loadSearch(filter);
          break;

        case 'fiction':
          filter = data.filter((show) => show.genres.includes('Science-Fiction')
            || show.genres.includes('Fantasy')
            || show.genres.includes('Mystery')
            || show.genres.includes('Supernatural'));

          loadSearch(filter);
          break;

        case 'comedy':
          filter = data.filter((show) => show.genres.includes('Comedy')
            || show.genres.includes('Adventure')
            || show.genres.includes('Family')
            || show.genres.includes('Romance'));

          loadSearch(filter);
          break;

        case 'horror':
          filter = data.filter((show) => show.genres.includes('Horror'));
          loadSearch(filter);
          break;

        default:
          break;
      }
    });
  });
};

export { returnHome, handleGenres };