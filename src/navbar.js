import Storage from './storage';

const returnHome = () => {
  const logo = document.querySelector('.logo');
  const all = document.querySelector('.category-item.all');

  const refresh = () => window.location.reload();

  logo.addEventListener('click', () => refresh());
  all.addEventListener('click', () => refresh());
};

const loadFilter = (shows) => {
  Storage.setItem('isSearch', 'filter by genres');
  Storage.setJson('search-results', shows);
  window.location.reload();
};

const handleGenres = (data) => {
  const categoryList = document.querySelectorAll('.category-item');

  categoryList.forEach((category) => {
    category.addEventListener('click', () => {
      const genre = category.classList[1];
      let filter = [];

      switch (genre) {
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