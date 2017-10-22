'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contentform');
  const inputs = form.querySelectorAll('input');
  const textarea = form.querySelector('textarea');
  const outputBlock = document.querySelector('#output');
  const outputs = outputBlock.querySelectorAll('output');
  let inputZip;

  function validateZip() {
    inputZip.value = inputZip.value.replace(/\D/g, '');
    if (/[0-9]{6}/g.test(inputZip.value)) {
      return true;
    }
  }

  function validateInputs() {
    for (let input of inputs) {
      if (input.value.length < 3)
        return;
    }
    return true;
  }

  function validateTextarea() {
    if (textarea.value.length < 3)
      return;
    return true;
  }

  function validateAll() {
    if (validateInputs() && validateTextarea() && validateZip()) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', 'disabled');
    }
  }

  for (let input of inputs) {
    if (input.name === 'zip') {
      inputZip = input;
      input.addEventListener('input', validateZip);
    }
    input.addEventListener('input', validateAll);
  }
  textarea.addEventListener('input', validateTextarea);
  textarea.addEventListener('input', validateAll);

  form.querySelector('.button-contact').addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.add('hidden');
    outputBlock.classList.remove('hidden');

    Array.from(outputs).forEach(function (val) {
      for (let input of inputs) {
        if (val.id === input.name)
          val.value = input.value;
      }
      if (val.id === 'message')
        val.value = textarea.value;
    });
  });

  outputBlock.querySelector('.button-contact').addEventListener('click', function () {
    form.classList.remove('hidden');
    outputBlock.classList.add('hidden');
  });
});