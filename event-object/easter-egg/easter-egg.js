'use strict';
window.onload = function () {
  const keyCodes = [17, 18, 84];
  const secretWord = [89, 84, 78, 74, 75, 74, 85, 66, 90];
  let pressed = {};

  document.addEventListener('keydown', function (e) {
    pressed[e.keyCode] = true;

      for (let code of keyCodes) {
        if (!pressed[code])
          return;
      }
      document.getElementsByTagName('nav')[0].classList.add('visible');

      for (let code of secretWord) {
        if (!pressed[code])
          return;
      }
      document.getElementsByClassName('secret')[0].classList.add('visible');

    pressed = {};
  });

  document.addEventListener('click', function (e) {
    delete pressed[e.keyCode];
  });
};