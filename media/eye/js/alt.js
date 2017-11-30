'use strict';
const eye = document.querySelector('.big-book__pupil');

const docWidth = document.documentElement.clientWidth;
const docHeight = document.documentElement.offsetHeight;
const p = document.querySelector('#coords')
const box = eye.getBoundingClientRect();
document.addEventListener('click', e => {
  console.log(e.pageX + ':' + e.pageY);
});

document.addEventListener('mousemove', e => {

  let left = docWidth - (box.left + pageXOffset + eye.clientWidth / 2);
  let top =  (box.x   + eye.clientHeight / 2);
  let bottom = docHeight - top;


  let eyePosPer = top * 100 / docHeight;
  let cursPosPer = e.pageY * 100 / docHeight;

  //console.log(`${eyePosPer} : ${cursPosPer}`);
  let pupilY;
  if(eyePosPer > cursPosPer) {
   pupilY = Math.floor((cursPosPer * 30 / 100));
  } else {
    pupilY = Math.floor((cursPosPer * 30 / 100) * -1);
  }

  let a = e.pageX * 100 / left;
  if (a <= 100)
    a = (a * -30 / 100 + 30) * -1;
  else
    a = (a - 100) * 30 / 100;

  console.log(pupilY);



  let pupilX = Math.floor(a);

  let pupilSize;
  p.textContent = `${top}`;


  eye.style.setProperty('--pupil-x', `${pupilX}px`);
  eye.style.setProperty('--pupil-y', `${pupilY}px`);
  eye.style.setProperty('--pupil-size', `${2}`);


});
