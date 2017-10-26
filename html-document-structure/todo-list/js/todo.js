'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const done = document.querySelector('.done');
  const undone = document.querySelector('.undone');

  const doneItems = done.querySelectorAll('label');
  const undoneItems = undone.querySelectorAll('label');

  function doneToUndone(e) {
    const targetElem = e.target;
    undone.appendChild(targetElem);
    targetElem.removeEventListener('click', doneToUndone);
    targetElem.addEventListener('click', undoneToDone);
  }

  function undoneToDone(e) {
    const targetElem = e.target;
    done.appendChild(targetElem);
    targetElem.removeEventListener('click', undoneToDone);
    targetElem.addEventListener('click', doneToUndone);
  }

  for (let item of doneItems) {
    item.addEventListener('click', doneToUndone);
  }
  for (let item of undoneItems) {
    item.addEventListener('click', undoneToDone);
  }
});
