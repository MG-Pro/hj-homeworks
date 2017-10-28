'use strict';

function addHandlers() {
  const items = document.querySelectorAll('figure');
  for (let item of items) {
    item.addEventListener('click', addItemToCard);
  }

  function addItemToCard(e) {
    e.preventDefault();
    addToCart({
      title: e.target.dataset.title,
      price: e.target.dataset.price
    });
  }
}

addHandlers();

const showMoreBtn = document.querySelector('.show-more');
showMoreBtn.addEventListener('click', addHandlers);