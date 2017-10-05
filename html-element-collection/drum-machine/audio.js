'use strict';
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    let list = document.getElementsByTagName('audio')
    console.log(list);
    list[0].paused = false;

  }};