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
  
  const imgNode = {
    name: 'figure',
    childs: [
      {
        name: 'img',
        props: {
          src: `${src}`
        }
      },
      {
        name: 'figcaption',
        childs: [
          {
            name: 'a',
            props: {
              href: `${src}`,
              download: 'snapshot.png'
            },
            childs: [
              {
                name: 'i',
                props: {
                  class: 'material-icons'
                }
              }
            ]
          }
        ]
      }
    ]
  };
  
  createElement()

}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.name);
  if (typeof node.props === 'object' && node.props !== null) {
    Object.keys(node.props).forEach(i => element.setAttribute(i, node.props[i]));
  }
  node.childs.forEach(child => {
    if (typeof child === 'string') {
      element.textContent = child;
    } else {
      element.appendChild(createElement(child));
    }
  });
  return element;
}
