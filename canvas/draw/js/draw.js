'use strict';

const canvas = document.querySelector('#draw');

window.addEventListener('resize', (e) => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const ctx = canvas.getContext('2d');
const d = 20; // dimensions
canvas.addEventListener('click', (e) => {
  const point = [e.layerX, e.layerY];
  ctx.beginPath();
  if (e.shiftKey) {
    ctx.arc(...point, d, 0, 2 * Math.PI);
  } else {
    ctx.rect(...point, d, d);
  }
  ctx.fill();
});

