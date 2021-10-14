const itemsCounter = () => {
  const cards = document.querySelectorAll('.tv-show-card');

  return cards.length;
};

const displayItemsCount = () => {
  const all = document.querySelector('.category-item.all');

  const span = document.createElement('span');
  span.className = 'items-counter';
  span.innerHTML = ` (${itemsCounter()})`;

  all.appendChild(span);
};

export default displayItemsCount;