'use strict';
if(!localStorage.color) {
  fetch('https://neto-api.herokuapp.com/cart/colors')
    .then(response => {
      return response.text();
    })
    .then(text => {
      console.log(text);
      localStorage.color = text;
    })
    .catch(error => {
      console.log(error);
    });
}
if(!localStorage.sizes) {
  fetch('https://neto-api.herokuapp.com/cart/sizes')
    .then(response => {
      return response.text();
    })
    .then(text => {
      console.log(text);
      localStorage.sizes = text;
    })
    .catch(error => {
      console.log(error);
    });
}
if(!localStorage.cart) {
  fetch('https://neto-api.herokuapp.com/cart')
    .then(response => {
      return response.text();
    })
    .then(text => {
      console.log(text);
      localStorage.cart = text;
    })
    .catch(error => {
      console.log(error);
    });
}
try {
  let color = JSON.parse(localStorage.color);
  const colorSwatch = document.querySelector('#colorSwatch');
  color.forEach(val => {
    let div = document.createElement('div');
    div.dataset.value = val.type;
    div.classList.add(val.type);
    div.classList.add('color');

    let divHead = document.createElement('div');
    divHead.classList.add('tooltip');
    divHead.textContent = val.title;

    let input = document.createElement('input');
    input.id = val.type;
    input.value = val.type;

    let label = document.createElement('label');
    label.for = val.type;

    let span = document.createElement('span');
    span.style.backgroundColor = val.code;

    if(val.isAvailable) {
      div.classList.add('available');
      input.disabled = true;
    } else {
      div.classList.add('soldout ');
    }

    label.appendChild(span);
    div.appendChild(divHead);
    div.appendChild(input);
    div.appendChild(label);

    colorSwatch.appendChild(div);
  });
} catch (e) {
  console.log(new Error(e));
}






