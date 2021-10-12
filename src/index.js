import { getShows } from './api';
import card from './home';
import './style.css';

const loadPage = () => {
  window.onload = () => {
    getShows().then((shows) => card(shows));
  };
};

loadPage();
