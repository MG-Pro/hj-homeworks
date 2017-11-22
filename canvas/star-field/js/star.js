'use strict';

const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 400;
canvas.addEventListener('click', () => createSky(canvas));
createSky(canvas);

function createSky(elem) {
  const ctx = elem.getContext('2d');

  const cWidht = elem.clientWidth;
  const cHeight = elem.clientHeight;
  const count = getRandom(200, 400);

  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.moveTo(0, 0);
  ctx.lineTo(cWidht, 0);
  ctx.lineTo(cWidht, cHeight);
  ctx.lineTo(0, cHeight);
  ctx.closePath();
  ctx.fill();

  for (let i = 0; i <= count; i++) {
    createStar(new randomParam(ctx));
  }

  function randomParam(ctx) {
    const colors = ['#ffffff', '#ffe9c4', '#d4fbff'];
    this.color = colors[getRandom(0, 3)];
    this.x = getRandom(2, cWidht - 2);
    this.y = getRandom(2, cHeight - 2);
    this.globalAlpha = getRandom(0.8, 1, 2);
    this.r = getRandom(0, 1.1 / 2, 2);
    this.ctx = ctx;
  }

  function getRandom(min, max, digits = 0) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(digits));
  }

  function createStar(param) {
    const ctx = param.ctx;
    ctx.beginPath();
    ctx.fillStyle = param.color;
    ctx.globalAlpha = param.globalAlpha;
    ctx.arc(param.x, param.y, param.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}

