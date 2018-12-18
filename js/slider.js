'use strict';

const slides = document.querySelector('.slides');
let currentSlide = slides.firstElementChild;
currentSlide.classList.add('slide-current');

const prev = document.querySelector('[data-action = prev]');
const next = document.querySelector('[data-action = next]');
const first = document.querySelector('[data-action = first]');
const last = document.querySelector('[data-action = last]');

prev.addEventListener('click', event => change('prev'));
next.addEventListener('click', event => change('next'));
first.addEventListener('click', event => change('first'));
last.addEventListener('click', event => change('last'));

function changeSlide(s) {
  switch (s) {
    case 'prev':
      return currentSlide.previousElementSibling;  
    case 'next':
      return currentSlide.nextElementSibling;
    case 'first':
      return slides.firstElementChild;
    case 'last':
      return slides.lastElementChild;
    default:
      return;
  }
}

function change() {  
  const activatedSlide = changeSlide(event.target.dataset.action);
  if (!activatedSlide) return;
  currentSlide.classList.remove('slide-current');
  activatedSlide.classList.add('slide-current');
  prev.classList.toggle('disabled', activatedSlide.previousElementSibling === null);
  first.classList.toggle('disabled', activatedSlide.previousElementSibling === null);
  next.classList.toggle('disabled', activatedSlide.nextElementSibling === null);
  last.classList.toggle('disabled', activatedSlide.nextElementSibling === null);
  currentSlide = activatedSlide;
}