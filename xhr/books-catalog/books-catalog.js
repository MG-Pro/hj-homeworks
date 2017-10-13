document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#content').removeChild(document.querySelector('#content li'));

  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'http://netology-fbb-store-api.herokuapp.com/book/'
  );
  xhr.send();
  xhr.addEventListener('load', function (e) {
    if(xhr.status !== 200) {
      console.log(new Error('Ошибка!'));
      return;
    }
    console.log(xhr.response);
  })

});