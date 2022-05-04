import '../../vendor/swiper';

const initReviews = () => {
  // eslint-disable-next-line no-unused-vars, no-undef
  const sliderReviews = new Swiper('.reviews__slider', {
    // Навигация
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    // Слайды
    slidesPerView: 1,
    slidersPerGroup: 1,
  });
};

export {initReviews};
