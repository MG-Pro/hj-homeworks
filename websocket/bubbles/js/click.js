'use strinct';

const ws = new WebSocket('wss://neto-api.herokuapp.com/mouse');
window.addEventListener('beforeunload', () => {
  ws.onclose = function () {};
  ws.close()
});

document.addEventListener('click', function (e) {
  const click = {};
  click.pageX = e.pageX;
  click.pageY = e.pageY;
  ws.send(JSON.stringify(click));

  showBubbles(ws);
});