import {
  getShows,
} from './api';
import startComment from './comments';
import {
  card,
} from './home';
import './style.css';

const loadPage = async () => {
  let shows = await getShows();
  shows = shows.slice(0, 30);
  card(shows);
  startComment();
};

loadPage();
