import {
  getShows,
} from './api';
import startComment from './comments';
import {
  card, search,
} from './home';
import Storage from './storage';
import './style.css';

const loadPage = async () => {
  const isSearch = Storage.getItem('isSearch');

  if (isSearch) {
    Storage.setItem('isSearch', '');
    const search = Storage.getJson('search-results');
    card(search);
  } else {
    let shows = await getShows();
    shows = shows.slice(0, 30);
    card(shows);
  }

  startComment();
};

search();
loadPage();
