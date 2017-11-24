'use strict';

let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');
let curves = [];
let brushWidht = 100;
let drawing = false;
let needsRepaint = false;
let hue = 0;
let hueCount = true;
let brushWidthCount = true;
let shift;

window.addEventListener('resize', resize);
canvas.addEventListener('dblclick', clear);
resize();

function clear() {
  curves = [];
  needsRepaint = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resize() {
  clear();
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function getWidth() {
  if (ctx.lineWidth === 5)
    brushWidthCount = false;
  if (ctx.lineWidth === 100)
    brushWidthCount = true;
  if (brushWidhtCount)
    return brushWidht--;
  else
    return brushWidht++;
}

function getHue() {
  if(hue === 0)
    hueCount = false;
  if(hue === 359)
    hueCount = true;
  if(hueCount)
    return hue--;
  else
    return hue++;
}

function smoothCurveBetween(p1, p2) {
  const cp = p1.map((item, i) => {
    return (item + p2[i]) / 2;
  });
  ctx.lineWidth = getWidth();
  ctx.strokeStyle = shift ? `hsl(${getHue()}, 100%, 50%)` : `hsl(${getHue()}, 100%, 50%)`;
  ctx.quadraticCurveTo(p1[0], p1[1], cp[0], cp[1]);
}

function smoothCurve(points) {
  ctx.beginPath();
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  if (points.length > 2) {
    for (let i = points.length - 2; i < points.length - 1; i++) {
      ctx.moveTo(...points[i]);
      smoothCurveBetween(points[i], points[i + 1]);
    }
    ctx.stroke();
  }
}

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  const curve = [];
  curve.push([e.offsetX, e.offsetY]);
  curves.push(curve);
  needsRepaint = true;
});

canvas.addEventListener("mouseup", (e) => {
  drawing = false;
  curves = [];
  shift = e.shiftKey;
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
  curves = [];
});

canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    const point = [e.offsetX, e.offsetY];
    curves[curves.length - 1].push(point);
    needsRepaint = true;
  }
});

function repaint() {
  curves.forEach((curve) => {
    smoothCurve(curve);
  });
}

function tick() {
  if (needsRepaint) {
    repaint();
    needsRepaint = false;
  }
  requestAnimationFrame(tick);
}
tick();