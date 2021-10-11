const card = (shows) => {
  const cardList = document.querySelector('.cards-container');

  shows.forEach((show) => {
    const li = document.createElement('li');
    li.className = 'tv-show-card';

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
    p.innerHTML = '<i class=\'thumbs up outline icon\'></i> Likes';
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

export default card;