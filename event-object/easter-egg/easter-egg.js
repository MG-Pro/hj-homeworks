'use strict';
window.onload = function () {

  const keyCodes = [17, 18, 84];
  const secretWord = 'ytnjkubz';
  const secretCodes = secretWord.split('').map(function (val) {
    return val.charCodeAt(0);
  });

  let pressed = {};

  document.addEventListener('keydown', function (e) {
    pressed[e.keyCode] = true;
    for (let code of keyCodes) {
      if (!pressed[code])
        return;
    }
    pressed = {};
    document.getElementsByTagName('nav')[0].classList.add('visible');



  });

  document.addEventListener('click', function (e) {
    delete pressed[e.keyCode];
  });

};