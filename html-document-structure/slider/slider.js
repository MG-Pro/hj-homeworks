'use strict';
document.addEventListener('DOMContentLoaded', function () {
  function mySlider(cont) {
    const next = cont.querySelector('[data-action=next]');
    const prev = cont.querySelector('[data-action=prev]');
    const first = cont.querySelector('[data-action=first]');
    const last = cont.querySelector('[data-action=last]');
    const slides = cont.querySelectorAll('.slider ul li');

    slides[0].classList.toggle('slide-current');
    prev.classList.toggle('disabled');
    first.classList.toggle('disabled');

    if (slides.length <= 1) {
      next.classList.toggle('disabled');
      last.classList.toggle('disabled');
    }

    function leaf(direction, e) {
      if (e.target.classList.contains('disabled'))
        return;

      const currentSlide = cont.querySelector('.slide-current');
      let nextSlide;
      if (direction === 'next')
        nextSlide = currentSlide.nextElementSibling;
      else if (direction === 'prev')
        nextSlide = currentSlide.previousElementSibling;

      if (!nextSlide.nextElementSibling) {
        next.classList.add('disabled');
        last.classList.add('disabled');
      } else {
        next.classList.remove('disabled');
        last.classList.remove('disabled');
      }
      if (!nextSlide.previousElementSibling) {
        prev.classList.add('disabled');
        first.classList.add('disabled');
      } else {
        prev.classList.remove('disabled');
        first.classList.remove('disabled');
      }
      currentSlide.classList.toggle('slide-current');
      nextSlide.classList.toggle('slide-current');
    }

    function leafEnd(direction) {
      const currentSlide = cont.querySelector('.slide-current');
      currentSlide.classList.toggle('slide-current');
      if (direction === 'next') {
        slides[slides.length - 1].classList.toggle('slide-current');
        next.classList.add('disabled');
        last.classList.add('disabled');
        prev.classList.remove('disabled');
        first.classList.remove('disabled');
      } else if (direction === 'prev') {
        slides[0].classList.toggle('slide-current');
        prev.classList.add('disabled');
        first.classList.add('disabled');
        next.classList.remove('disabled');
        last.classList.remove('disabled');
      }
    }

    next.addEventListener('click', (e) => {
      leaf('next', e);
    });
    prev.addEventListener('click', (e) => {
      leaf('prev', e);
    });
    last.addEventListener('click', () => {
      leafEnd('next');
    });
    first.addEventListener('click', () => {
      leafEnd('prev');
    });
  }

  mySlider(document.querySelector('.slider'));
});