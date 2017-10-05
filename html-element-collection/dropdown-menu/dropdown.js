'use strict';
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    document.getElementsByClassName('wrapper-dropdown')[0].onclick = function () {
      this.classList.toggle('active');
    }

  }};