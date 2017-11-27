'use strict';

const vidCont = document.querySelector('.app');
const errorCont = vidCont.querySelector('#error-message');
const controls = vidCont.querySelector('.controls');
const vid = document.createElement('video');
const canvas = document.createElement('canvas');

if (!navigator.mediaDevices) {
  errorCont.textContent = 'API not support';
}

navigator.mediaDevices
  .getUserMedia({video: true, audio: false})
  .then(stream => {
    controls.firstElementChild.addEventListener('click', takePhoto);
    controls.classList.toggle('visible');
    vidCont.insertBefore(vid, controls);
    vid.width = vidCont.clientWidth;
    vid.height = vidCont.clientHeight;
    vid.src = URL.createObjectURL(stream);


  })
  .catch(err => {
    errorCont.textContent = 'Нет доступа к камере';
    errorCont.classList.toggle('visible');
    console.log(err);
  });

function takePhoto(e) {
  canvas.width = vid.clientWidth;
  canvas.height = vid.clientHeight;
  vid.style.display = 'none';
  vidCont.insertBefore(canvas, controls);
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  ctx.drawImage(vid, 0, 0);



}