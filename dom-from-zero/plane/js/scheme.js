'use strict'
const setFull = document.querySelector('#btnSetFull');
const setEmpty = document.querySelector('#btnSetEmpty');
const seatMapTitle = document.querySelector('#seatMapTitle ');
const select = document.querySelector('#acSelect');

setFull.disabled = true;
setEmpty.disabled = true;

document.querySelector('#btnSeatMap').addEventListener('click', e => {
  e.preventDefault();
  fetch(`https://neto-api.herokuapp.com/plane/${select.value}`)
    .then(resp => {
      return resp.json();
    })
    .then(render)
    .catch(error => console.log(error))
});

function render(data) {
  const seatMapDiv = document.querySelector('#seatMapDiv');
  console.log(data);
  setFull.disabled = false;
  setEmpty.disabled = false;
  seatMapTitle.textContent = `${data.title} (${data.passengers} пассажиров)`;

  const rows = data.scheme.map(renderRow);

  const fragment = rows.reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
  }, document.createDocumentFragment());

  seatMapDiv.appendChild(fragment);
}

//el('div', {class: 'product-price'}, product.price)

function renderRow(row) {
  return  el('div', {class: 'row seating-row text-center'}, [
            el('div', {class: 'col-xs-1 row-number'}, [
              el('h2', {class: ''}, `${row + 1}`)
            ]),
            el('div', {class: 'product-price'}, row)
          ]);
}

function el(tagName, attributes, children) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
}