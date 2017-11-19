'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

ws.addEventListener('message', e => {
  console.log(e);
});

ws.addEventListener('close', e => {
  console.log(e);
});

window.editor.addEventListener('update', e => {
  const ctx = e.canvas.getContext('2d');
  const image = ctx.getImageData(0, 0, 100, 100);
  const binary = Uint8Array.from(image.data);
  ws.send(binary.buffer)
});


