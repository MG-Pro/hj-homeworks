'use strict';

document.addEventListener('mousemove', e => {
  const eye = document.querySelector('.big-book__pupil');
  let pupilX;
  let pupilY;
  let pupilSize;

  eye.style.setProperty('--pupil-x', pupilX);
  eye.style.setProperty('--pupil-y', pupilY);
  eye.style.setProperty('--pupil-size', pupilSize);


});
