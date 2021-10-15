import Storage from './storage';

const categoryList = document.querySelectorAll('.category-item');

const refresh = () => window.location.reload();

const addActive = (genre) => {
  Storage.setItem('active', genre);
};

const returnHome = () => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => refresh());
};

const loadFilter = (shows) => {
  Storage.setItem('isSearch', 'filter by genres');
  Storage.setJson('search-results', shows);
  window.location.reload();
};

const handleGenres = (data) => {
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

          loadFilter(filter);
          break;

        case 'fiction':
          filter = data.filter((show) => show.genres.includes('Science-Fiction')
            || show.genres.includes('Fantasy')
            || show.genres.includes('Mystery')
            || show.genres.includes('Supernatural'));

          loadFilter(filter);
          break;

        case 'comedy':
          filter = data.filter((show) => show.genres.includes('Comedy')
            || show.genres.includes('Adventure')
            || show.genres.includes('Family')
            || show.genres.includes('Romance'));

          loadFilter(filter);
          break;

        case 'horror':
          filter = data.filter((show) => show.genres.includes('Horror'));
          loadFilter(filter);
          break;

        default:
          break;
      }
    });
  });
};

export { returnHome, handleGenres };