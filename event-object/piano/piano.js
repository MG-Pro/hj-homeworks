'use strict';
window.onload = function () {

  const tracks = [
    'first.mp3',
    'second.mp3',
    'third.mp3',
    'fourth.mp3',
    'fifth.mp3'
  ];
  const piano = document.getElementsByClassName('set')[0];

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Alt') {
      piano.classList.remove('middle', 'lower', 'higher');
      piano.classList.add('lower');
    } else if (e.key === 'Shift') {
      piano.classList.remove('middle', 'lower', 'higher');
      piano.classList.add('higher');
    }
  });

  document.addEventListener('keyup', function (e) {
    if (e.key === 'Alt' || e.key === 'Shift') {
      piano.classList.remove('middle', 'lower', 'higher');
      piano.classList.add('middle');
    }
  });

};

