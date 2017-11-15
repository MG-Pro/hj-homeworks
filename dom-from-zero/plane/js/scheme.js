'use strict'
const setFull = document.querySelector('#btnSetFull');
const setEmpty = document.querySelector('#btnSetEmpty');
const seatMapTitle = document.querySelector('#seatMapTitle ');
const select = document.querySelector('#acSelect');
const totalPax = document.querySelector('#totalPax');
const totalAdult = document.querySelector('#totalAdult');
const totalHalf = document.querySelector('#totalHalf');
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

  const rows = data.scheme.map(renderRow, data);

  const fragment = rows.reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
  }, document.createDocumentFragment());
  seatMapDiv.textContent = '';
  seatMapDiv.appendChild(fragment);
  totalPax.textContent = 0;
  totalAdult.textContent = 0;
  totalHalf.textContent = 0;
  seatMapDiv.addEventListener('click', e => {
    let targetElem = e.target;
    if (targetElem.classList.contains('seat-label')) {
      targetElem = targetElem.parentNode;
    }
    if (!targetElem.classList.contains('seat'))
      return;

    if (targetElem.classList.contains('adult')) {
      targetElem.classList.remove('adult');
      totalPax.textContent--;
      totalAdult.textContent--;
    } else if (targetElem.classList.contains('half')) {
      targetElem.classList.remove('half');
      totalPax.textContent--;
      totalHalf.textContent--;
    } else {
      if (e.altKey) {
        targetElem.classList.add('half');
        totalHalf.textContent++;
      } else {
        targetElem.classList.add('adult');
        totalAdult.textContent++;
      }
      totalPax.textContent++;
    }
  });

  setFull.addEventListener('click', setFullEmpty);
  setEmpty.addEventListener('click', setFullEmpty);
}

function setFullEmpty(e) {
  e.preventDefault();
  e.stopPropagation();
  const seats = document.querySelectorAll('.seat');
  if (e.target.id === 'btnSetEmpty') {
    for (let item of seats) {
      item.classList.remove('half', 'adult');
      totalPax.textContent = 0;
      totalAdult.textContent = 0;
      totalHalf.textContent = 0;
    }
  } else if (e.target.id === 'btnSetFull') {
    totalPax.textContent = 0;
    totalAdult.textContent = 0;
    totalHalf.textContent = 0;
    for (let item of seats) {
      item.classList.add('adult');
      totalAdult.textContent++;
      totalPax.textContent++;
    }
  }
}

function renderRow(row, index) {
  return el('div', {class: 'row seating-row text-center'}, [
    el('div', {class: 'col-xs-1 row-number'}, [
      el('h2', {class: ''}, `${index + 1}`)
    ]),
    el('div', {class: 'col-xs-5'}, getSeat(row, this, 'left')),
    el('div', {class: 'col-xs-5'}, getSeat(row, this, 'right'))
  ]);
}

function getSeat(row, data, side) {
  let seats = data.letters6;
  let startCount = 0;
  let endCount = row / 2;
  const fragment = [];
  if (side === 'right') {
    startCount = row / 2;
    endCount = row;
  }
  if (row === 0) {
    return el('div', {class: 'col-xs-4 no-seat'})
  } else if (row < 6) {
    seats = data.letters4;
  }
  for (let i = startCount; i < endCount; i++) {
    fragment.push(
      el('div', {class: 'col-xs-4 seat'}, [
        el('div', {class: 'seat-label'}, `${seats[i]}`)
      ]))
  }
  return fragment;
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





