'use strict';
window.onload = function () {
  const nav = document.getElementsByClassName('gallery-nav')[0];
  const links = nav.getElementsByTagName('a');
  const img = document.getElementsByClassName('gallery-view')[0];
  const name = document.createElement('h2');
  document.body.insertBefore(name, nav);

  nav.addEventListener('click', function (e) {
    e.preventDefault();
    for (let link of links) {
      link.classList.remove('gallery-current');
    }
    e.target.parentElement.classList.add('gallery-current');
    img.src = e.target.parentElement.href;
    name.innerHTML = e.target.title;
  })
};
