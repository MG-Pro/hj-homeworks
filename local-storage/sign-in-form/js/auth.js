'use strict';
const submites = document.querySelectorAll('input[type=submit]');

function submit(e) {
  e.preventDefault();
  const form = e.target.parentNode.parentNode;
  const formData = new FormData(form);
  const data = {};
  for (let [k, v] of formData) {
    data[k] = v;
  }
  let path, msg;
  let name = '';
  if (form.classList.contains('sign-up-htm')) {
    path = 'https://neto-api.herokuapp.com/signup';
    msg = `Пользователь {name} успешно зарегистрирован`;
  } else {
    path = 'https://neto-api.herokuapp.com/signin';
    msg = `Пользователь {name} успешно авторизован`;
  }

  let xhr = new XMLHttpRequest();
  xhr.open(
    'POST',
    path);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
  xhr.addEventListener('load', function () {
    let resp = JSON.parse(xhr.response);
    const output = form.querySelector('.error-message');
    if (resp.error) {
      output.textContent = resp.message;
    } else {
      output.textContent = msg.replace(/{name}/g, resp.name);
    }
  });
}

submites[0].addEventListener('click', submit);
submites[1].addEventListener('click', submit);