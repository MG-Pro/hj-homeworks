'use strict';

const eye = document.querySelector('.big-book__pupil');
const eyeX = eye.getBoundingClientRect().x;
const eyeY = eye.getBoundingClientRect().y;
const height = window.innerHeight;
const width = window.innerWidth;

const corners = [
  {
    x: 0,
    y: 0
  },
  {
    x: width,
    y: 0
  },
  {
    x: width,
    y: height
  },
  {
    x: 0,
    y: height
  }
];

const maxDist = corners.reduce((max, cur) => {
  const distance = dist(cur.x, cur.y, eyeX, eyeY);
  if (distance > max) {
    return distance
  } else {
    return max
  }
}, 0);

function dist(aX, aY, bX, bY) {
  return Math.sqrt((aX - bX) * (aX - bX) + (aY - bY) * (aY - bY))
}

document.addEventListener('mousemove', function (e) {
  const cursorRelCoord = {
    x: e.clientX - eyeX,
    y: e.clientY - eyeY
  };
  const cursorAngle = Math.atan(cursorRelCoord.y / cursorRelCoord.x);
  const cursorPolarCoord = {
    r: dist(eyeX, eyeY, e.clientX, e.clientY) / maxDist,
    t: cursorAngle
  };
  
  let pupilSize = 1;
  if (cursorPolarCoord.r * 3 < 3 && cursorPolarCoord.r * 3 > 1) {
    pupilSize = 1 / cursorPolarCoord.r
  } else if (cursorPolarCoord.r * 3 <= 1) {
    pupilSize = 3
  }
  
  let pupilX;
  let pupilY;
  
  if (cursorRelCoord.x > 0) {
    pupilX = 30 * cursorPolarCoord.r * Math.cos(cursorPolarCoord.t);
  } else {
    pupilX = -(30 * cursorPolarCoord.r * Math.cos(cursorPolarCoord.t));
  }
  if (cursorRelCoord.y > 0) {
    pupilY = 30 * cursorPolarCoord.r * Math.sin(cursorPolarCoord.t);
  } else {
    pupilY = -(30 * cursorPolarCoord.r * Math.sin(cursorPolarCoord.t));
  }
  
  
  eye.style.setProperty('--pupil-size', pupilSize);
  eye.style.setProperty('--pupil-x', Math.floor(pupilX) + 'px');
  eye.style.setProperty('--pupil-y', Math.floor(pupilY) + 'px');
});
