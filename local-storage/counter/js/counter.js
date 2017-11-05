'use strict';
const counterOut = document.querySelector('#counter');
let counter = 0;

if (document.cookie === '') {
  counterOut.textContent = counter;
} else {
  document.cookie.split('; ').forEach(val => {
    let countVal = val.split('=');
    if (countVal[0] === 'count') {
      counter = +countVal[1];
    }
  });
  counterOut.textContent = counter;
}

function setCookie(count) {
  if (!count) {
    let date = new Date(0);
    document.cookie = `count=; path=/; expires=${date.toUTCString()}`;
  } else {
    let date = new Date();
    date.setYear(date.getFullYear() + 1);
    document.cookie = `count=${counter}; path=/; expires=${date.toUTCString()}`;
  }
  console.log(document.cookie);
}

document.querySelector('.wrap-btns').addEventListener('click', function (e) {
  if (e.target.id === 'increment') {
    counterOut.textContent = ++counter;
    setCookie(counter);
  } else if (e.target.id === 'decrement' && counter > 0) {
    counterOut.textContent = --counter;
    setCookie(counter);
  } else if (e.target.id === 'reset') {
    counterOut.textContent = counter = 0;
    setCookie(0)
  }
});