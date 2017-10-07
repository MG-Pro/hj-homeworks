'use strict';
window.onload = function () {
  let list = Array.from(document.getElementsByClassName('drum-kit__drum'));
  list.forEach((val) => {
    val.onclick = function () {
      this.getElementsByTagName('audio')[0].play();
    };
  });
};