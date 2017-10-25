'use strict';
document.addEventListener('DOMContentLoaded', function () {
  function mySlider(cont) {
    const next = cont.querySelector('[data-action=next]');
    const prev = cont.querySelector('[data-action=prev]');
    const first = cont.querySelector('[data-action=first]');
    const last = cont.querySelector('[data-action=last]');
    const slides = cont.querySelectorAll('.slide');

    slides[0].classList.toggle('slide-current');

    function leaf(direction) {
      if(this.classList.contains('disabled'))
        return;
      const currentSlide = cont.querySelector('.slide-current');

      if()
      const nextSlide = currentSlide.nextElementSibling;
      currentSlide.classList.toggle('slide-current');
      nextSlide.classList.toggle('slide-current');
      if(!nextSlide.nextElementSibling) {
        next.classList.toggle('disabled');
        last.classList.toggle('disabled');
      }


    }


    next.addEventListener('click', () => {
      leaf('next');
    });
    prev.addEventListener('click', () => {
      leaf('prev');
    });
  }


  const slider = document.querySelector('.slider');
  mySlider(slider);

});