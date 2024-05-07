import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import AOS from "./../../node_modules/aos/dist/aos.js";
import { Fancybox } from "./modules/fancybox.esm.js";

import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера product-thumb-slider
const productSliderThumb = document.querySelector('.product-thumb-slider');
var mySwiperProductThumb = new Swiper(productSliderThumb, {
  slidesPerView: 5,
  spaceBetween: 25,
  direction: "vertical",
  speed: 600,
  freeMode: true,
  watchSlidesProgress: true,
  mousewheel: true,
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 9,
      direction: "horizontal",
    },
    992: {
      direction: "vertical",
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 25,
    },   
  },
});

// Инициализация слайдера product-slider
const productPageSlider = document.querySelector('.product-page-slider');
var mySwiperProductPage = new Swiper(productPageSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  freeMode: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: { // указываем на превью слайдер
    swiper: mySwiperProductThumb // указываем имя превью слайдера
  },
});


// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.introNavW .navArrowNext'),
    prevEl: document.querySelector('.introNavW .navArrowPrev'),
  },
});

// Инициализация слайдера galLgSlider
const galLgSlider = document.querySelector('.galLgSlider');
var mySwiperGalLg = new Swiper(galLgSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.galLgSect .navArrowNext'),
    prevEl: document.querySelector('.galLgSect .navArrowPrev'),
  },
});

// Инициализация слайдера reviewsSlider
const reviewsSlider = document.querySelector('.reviewsSlider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.reviewsSect .navArrowNext'),
    prevEl: document.querySelector('.reviewsSect .navArrowPrev'),
  },
});

// Инициализация слайдера productSlider
const productSlider = document.querySelector('.productSlider');
var mySwiperProduct = new Swiper(productSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.productNav .navArrowNext'),
    prevEl: document.querySelector('.productNav .navArrowPrev'),
  },
  pagination: {
    el: document.querySelector('.new-products-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера popularSlider
const popularSlider = document.querySelector('.popularSlider');
var mySwiperPopular = new Swiper(popularSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.popularSlider .navArrowNext'),
    prevEl: document.querySelector('.popularSlider .navArrowPrev'),
  },
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow(); 
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});


