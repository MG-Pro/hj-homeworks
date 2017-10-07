'use strict';
window.onload = function () {
  const play = document.getElementsByClassName('playstate')[0];
  const stop = document.getElementsByClassName('stop')[0];
  const back = document.getElementsByClassName('back')[0];
  const next = document.getElementsByClassName('next')[0];
  const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
  const audio = mediaplayer.getElementsByTagName('audio')[0];
  const tracks = [
    'mp3/LA Chill Tour.mp3',
    'mp3/LA Fusion Jam.mp3',
    'mp3/This is it band.mp3'
  ];
  let truckNumber = 0;

  function setTitle(elem = audio, stop = false) {
    let titleText = elem.src.substring(elem.src.lastIndexOf('/') + 1, elem.src.length).replace(/[%20]/ig, " ").substr(0, 25);
    if (stop)
      titleText = 'Stop';
    mediaplayer.getElementsByClassName('title')[0].setAttribute('title', titleText);
  }

  audio.src = tracks[truckNumber];
  setTitle();

  play.onclick = function () {
    setTitle();
    if (audio.paused) {
      audio.play();
      mediaplayer.classList.toggle('play');
    } else {
      audio.pause();
      mediaplayer.classList.toggle('play');
    }
  };

  stop.onclick = function () {
    setTitle(audio, true);
    mediaplayer.classList.remove('play');
    audio.pause();
    audio.currentTime = 0;
  };

  back.onclick = function () {
    if (truckNumber <= 0)
      truckNumber = tracks.length;
    truckNumber--;
    audio.src = tracks[truckNumber];
    setTitle();
    mediaplayer.classList.remove('play');
  };

  next.onclick = function () {
    if (truckNumber >= tracks.length - 1)
      truckNumber = -1;
    truckNumber++;
    audio.src = tracks[truckNumber];
    setTitle();
    mediaplayer.classList.remove('play');
  };

  audio.onended = function () {
    mediaplayer.classList.remove('play');
  }
};