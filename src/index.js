import { getShows } from './api';
import startComment from './comments';
import { card, search } from './home';
import Storage from './storage';
import { addLikes, displayLikes } from './likes';
import { displayItemsCount } from './counters';
import { returnHome, handleGenres } from './navbar';
import './style.css';

const validateData = (data) => {
  const list = data;
  let filtered = [];
  filtered = data.filter((show) => !show.image || !show.network || !show.rating.average);

  filtered.forEach((show) => {
    data.forEach((item) => {
      if (show === item) {
        const index = list.indexOf(item);
        list.splice(index, 1);
      }
    });
  });

  return list;
};

const loadPage = async () => {
  const isSearch = Storage.getItem('isSearch');
  let shows = await getShows();
  shows = validateData(shows);

  if (isSearch) {
    Storage.setItem('isSearch', '');
    let search = Storage.getJson('search-results');
    search = validateData(search);

    if (search.length === 0) {
      document.querySelector('.cards-container').innerHTML = 'No results found.';
    }

    card(search);
  } else {
    card(shows);
  }

  handleGenres(shows);
  addLikes();
  displayLikes();
  startComment();
  displayItemsCount();
};

search();
returnHome();
loadPage();
