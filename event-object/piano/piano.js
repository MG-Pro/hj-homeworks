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

  piano.addEventListener('click', function (e) {
    let tone = 'middle';
    if (e.altKey)
      tone = 'lower';
    else if (e.shiftKey)
      tone = 'higher';

    let trackIndex;
    let buttons = piano.getElementsByTagName('li');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === e.target) {
        trackIndex = i;
        break;
      }
    }

    let audio = e.target.getElementsByTagName('audio')[0];
    audio.src = `sounds/${tone}/${tracks[trackIndex]}`;
    audio.play();
  });
};

