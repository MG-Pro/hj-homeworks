'use strict';
window.onload = function () {
  const keyCodes = [17, 18, 84];
  const secretWord = [89, 84, 78, 74, 75, 74, 85, 66, 90];
  let pressed = {};
  let navVision = false;

  document.addEventListener('keydown', function (e) {
    pressed[e.keyCode] = true;
    if (!navVision) {
      for (let code of keyCodes) {
        if (!pressed[code])
          return;
      }
      document.getElementsByTagName('nav')[0].classList.add('visible');
      navVision = true;
    } else {
      for (let code of secretWord) {
        if (!pressed[code])
          return;
      }
      document.getElementsByClassName('secret')[0].classList.add('visible');
    }
    pressed = {};
  });

  document.addEventListener('click', function (e) {
    delete pressed[e.keyCode];
  });
};