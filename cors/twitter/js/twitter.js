'use strict';

function callback(book) {
  document.querySelector('[data-wallpaper]').src = book.wallpaper;
  document.querySelector('[data-username]').textContent = book.username;
  document.querySelector('[data-description]').textContent = book.description;
  document.querySelector('[data-pic]').src = book.pic;
  document.querySelector('[data-tweets]').textContent = book.tweets;
  document.querySelector('[data-followers]').textContent = book.followers;
  document.querySelector('[data-following]').textContent = book.following;
}

const script = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/twitter/jsonp';
document.body.appendChild(script);