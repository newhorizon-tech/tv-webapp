import { searchShows } from './api';
import Storage from './storage';

const card = (shows) => {
  const cardList = document.querySelector('.cards-container');

  shows.forEach((show) => {
    const li = document.createElement('li');
    li.className = 'tv-show-card';
    li.id = show.externals.imdb;
    li.setAttribute('data-mazeid', show.id);

    const summary = document.createElement('div');
    summary.innerHTML = show.summary;
    summary.id = 'summary';
    summary.hidden = true;
    li.appendChild(summary);

    const img = document.createElement('img');
    img.className = 'tv-show-image';
    img.src = show.image.medium;
    img.alt = `${show.name} TV show image`;
    li.appendChild(img);

    const h4 = document.createElement('h4');
    h4.className = 'title';
    h4.innerHTML = show.name;
    li.appendChild(h4);

    let div = document.createElement('div');
    div.className = 'network-rating';
    let p = document.createElement('p');
    p.innerHTML = show.network.name;
    div.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = `rating: ${show.rating.average}`;
    div.appendChild(p);
    li.appendChild(div);

    div = document.createElement('div');
    div.className = 'country-likes';
    p = document.createElement('p');
    p.className = 'country';
    p.innerHTML = `country: ${show.network.country.code}`;
    div.appendChild(p);
    p = document.createElement('p');
    p.className = 'likes';
    p.innerHTML = '<i class=\'heart icon\'></i> <span class=\'likes-count\'>0</span> Likes';
    div.appendChild(p);
    li.appendChild(div);

    div = document.createElement('div');
    div.className = 'card-actions';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'comments';
    button.innerHTML = 'Comments';
    div.appendChild(button);
    li.appendChild(div);

    cardList.appendChild(li);
  });
};

const refresh = () => window.location.reload();

const loadSearch = (shows) => {
  Storage.setItem('isSearch', 'search requested');
  Storage.setJson('search-results', shows);
  refresh();
};

const search = () => {
  const input = document.querySelector('.search-input');

  input.addEventListener('keydown', (e) => {
    const shows = [];

    if (e.key === 'Enter') {
      if (input.value) {
        searchShows(input.value)
          .then((results) => {
            results.forEach((result) => shows.push(result.show));
            loadSearch(shows);
          });
      }
    }
  });
};

export {
  card, search, loadSearch, refresh,
};
