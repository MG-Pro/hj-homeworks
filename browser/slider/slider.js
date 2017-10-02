'use strict';
document.onreadystatechange = function(){
  if(document.readyState === 'interactive'){
    let counter = 0;
    let images = document.getElementById('store').children;
    let container = document.getElementById('slider');
    function slider() {
      container.setAttribute('src', images[counter].getAttribute('src'));
      counter++;
      if(counter >= images.length) {
        counter = 0;
      }
    }
    slider();
    setInterval(slider, 5000);
    console.log(images);
  }};