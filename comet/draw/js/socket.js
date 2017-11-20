'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');
ws.addEventListener('message', listener);
ws.addEventListener('close', listener);
ws.addEventListener('open', listener);

function listener(e) {
  console.log(e);
}

window.editor.addEventListener('update', e => {
  e.canvas.toBlob(function (blob) {
    ws.send(blob);
  });
});


