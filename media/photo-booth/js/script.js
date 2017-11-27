'use strict';
const errorCont = document.querySelector('#error-message');
errorCont.style.display = 'block';

if (!navigator.mediaDevices) {
  errorCont.textContent = 'API not support';
}



navigator.mediaDevices
  .getUserMedia({video: true, audio: false})
  .then(stream => {
    console.log(stream);
    const vidCont = document.querySelector('.app');
    const vid = document.createElement('video');
    vid.width = '100%';
    vid.height = '100%';
    vidCont.appendChild(vid);
    vid.src = URL.createObjectURL(stream);





  })
  .catch(err => {
    errorCont.textContent = 'Нет доступа к камере';
    console.log(err);
  });