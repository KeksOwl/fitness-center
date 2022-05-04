import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

import {loadVideo} from './modules/about/about-video';
import {tabInit} from './modules/plan/plan-tabs';
import {initSlider} from './modules/coaches/coaches-slider';
import {initReviews} from './modules/reviews/reviews-slider';
import {initFormValidate} from './modules/feedback/form-validation';
import {initLocalStorage} from './modules/feedback/form-storage';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    loadVideo();
    tabInit();
    initSlider();
    initReviews();
    initFormValidate();
    initLocalStorage();
  });
});

// ---------------------------------
