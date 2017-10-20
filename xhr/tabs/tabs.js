document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  const content = document.getElementById('content');

  for (let link of links) {
    link.classList.remove('active');
    link.addEventListener('click', function (e) {

      e.preventDefault();
      if(link.classList.contains('active'))
        return;

      const preloader = document.getElementById('preloader');
      preloader.classList.remove('hidden');
      let xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        this.href,
        true);
      xhr.send();
      xhr.addEventListener('load', function () {
        if(xhr.status !== 200) {
          console.log(new Error('Ошибка!'));
          return;
        }
        preloader.classList.add('hidden');
        content.innerHTML = xhr.responseText;
        link.classList.add('active');
      });
      for (let link of links) {
        link.classList.remove('active');
      }
    });
  }
});