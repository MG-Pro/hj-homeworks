'use strict';
window.onload = function () {
  const nav = document.getElementsByClassName('gallery-nav')[0];
  const links = nav.getElementsByTagName('a');
  const img = document.getElementsByClassName('gallery-view')[0];

  nav.addEventListener('click', function (e) {
    e.preventDefault();
    for (let link of links) {
      link.classList.remove('gallery-current');
    }
    e.target.parentElement.classList.add('gallery-current');
    img.src = e.target.parentElement.href;
    img.alt = e.target.title;
  })
};
