import {
  getShows,
} from './api';
import startComment from './comments';
import {
  card, search,
} from './home';
import Storage from './storage';
import { addLikes, displayLikes } from './likes';
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

  if (isSearch) {
    Storage.setItem('isSearch', '');
    let search = Storage.getJson('search-results');
    search = validateData(search);
    // console.log(search);
    card(search);
  } else {
    let shows = await getShows();
    shows = shows.slice(0, 30);
    // shows = validateData(shows);
    // console.log(shows);
    card(shows);
  }
  addLikes();
  displayLikes();
  startComment();
};

search();
loadPage();
