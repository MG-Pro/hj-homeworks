'use strict';

const canvas = document.querySelector('canvas');




function createSky(elem) {
  const ctx = elem.getContext('2d');
  const pi = Math.PI;
  const cWidht = elem.width;
  const cHeight = elem.height;

  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.moveTo(0, 0);
  ctx.lineTo(cWidht, 0);
  ctx.lineTo(cWidht, cHeight);
  ctx.lineTo(0, cHeight);
  ctx.closePath();
  ctx.fill();




  createStar(100, 100, 10, ctx);


  function createStar(x, y, r, ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(x, y, r, 0, 2 * pi);
    ctx.fill();
  }
}

createSky(canvas);