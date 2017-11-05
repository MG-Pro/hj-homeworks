'use strict';

document.querySelector('.items-list').addEventListener('click', addItemToCard);

function addItemToCard(e) {
  e.preventDefault();
  if (!e.target.classList.contains('add-to-cart'))
    return;
  addToCart({
    title: e.target.dataset.title,
    price: e.target.dataset.price
  });
}