'use strict';

if (!navigator.mediaDevices) {
  console.log(new Error('API not support'));
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
    vid.src = stream;





  })
  .catch(err => console.log('oh noes'));