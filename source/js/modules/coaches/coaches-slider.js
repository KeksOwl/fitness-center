import '../../vendor/swiper';

const initSlider = () => {
  // eslint-disable-next-line no-unused-vars, no-undef
  const sliderCoaches = new Swiper('.coaches__slider', {
    // Навигация
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    // Слайды
    slidesPerView: 4,
    spaceBetween: 40,
    slidersPerGroup: 1,

    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {initSlider};
