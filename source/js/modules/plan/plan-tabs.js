const planBlock = document.querySelector('[data-section-plan]'); // Секция абонементов

const tabList = planBlock.querySelector('[data-tab-list]'); // Список табов

const tabItemFirst = planBlock.querySelector('[data-tab-item-first]'); // Элемент первого таба
const tabItemSecond = planBlock.querySelector('[data-tab-item-second]'); // Элемент второго таба
const tabItemThird = planBlock.querySelector('[data-tab-item-third]'); // Элемент третьего таба

const tabFirst = tabItemFirst.querySelector('[data-tab-first]'); // Первый таб (1 месяц)
const tabSecond = tabItemSecond.querySelector('[data-tab-second]'); // Первый таб (6 месяцев)
const tabThird = tabItemThird.querySelector('[data-tab-third]'); // Первый таб (12 месяцев)

const planFirst = planBlock.querySelector('[data-plan-first]'); // Первый список (1 месяц)
const planSecond = planBlock.querySelector('[data-plan-second]'); // Первый список (6 месяцев)
const planThird = planBlock.querySelector('[data-plan-third]'); // Первый список (12 месяцев)

const tabInit = () => {
  // Прячем лишние списки абонементов при подгрузке js
  planSecond.style.display = 'none';
  planThird.style.display = 'none';

  // Меняем значение data у скрытых списков
  planSecond.dataset.planSecond = 'is-hidden';
  planThird.dataset.planThird = 'is-hidden';

  // Навешиваем обработчик клика на список табов
  tabList.addEventListener('click', (evt) => {
    if (evt.target.matches('a')) {
      evt.preventDefault();

      if (evt.target === tabFirst) {
        // Показываем первый список
        planFirst.style.display = 'grid';
        planSecond.style.display = 'none';
        planThird.style.display = 'none';

        // Перекидываем класс модификатора на выбранный элемент таба
        tabItemFirst.classList.add('tab-list__item--selected');
        tabItemSecond.classList.remove('tab-list__item--selected');
        tabItemThird.classList.remove('tab-list__item--selected');

        // Перекидываем класс модификатора на выбранный таб
        tabFirst.classList.add('tab-list__link--selected');
        tabSecond.classList.remove('tab-list__link--selected');
        tabThird.classList.remove('tab-list__link--selected');

        // Меняем значения data у списков
        planFirst.dataset.planFirst = 'is-shown';
        planSecond.dataset.planSecond = 'is-hidden';
        planThird.dataset.planThird = 'is-hidden';

        // Меняем значение data у элементов таба
        tabItemFirst.dataset.tabItemFirst = 'is-selected';
        tabItemSecond.dataset.tabItemSecond = 'is-listed';
        tabItemThird.dataset.tabItemThird = 'is-listed';

        // Меняем значение data у таба
        tabFirst.dataset.tabFirst = 'is-selected';
        tabSecond.dataset.tabSecond = 'is-listed';
        tabThird.dataset.tabThird = 'is-listed';
      } else if (evt.target === tabSecond) {
        // Показываем второй список
        planFirst.style.display = 'none';
        planSecond.style.display = 'grid';
        planThird.style.display = 'none';

        // Перекидываем класс модификатора на выбранный элемент таба
        tabItemFirst.classList.remove('tab-list__item--selected');
        tabItemSecond.classList.add('tab-list__item--selected');
        tabItemThird.classList.remove('tab-list__item--selected');

        // Перекидываем класс модификатора на выбранный таб
        tabFirst.classList.remove('tab-list__link--selected');
        tabSecond.classList.add('tab-list__link--selected');
        tabThird.classList.remove('tab-list__link--selected');

        // Меняем значения data у списков
        planFirst.dataset.planFirst = 'is-hidden';
        planSecond.dataset.planSecond = 'is-shown';
        planThird.dataset.planThird = 'is-hidden';

        // Меняем значение data у элементов таба
        tabItemFirst.dataset.tabItemFirst = 'is-listed';
        tabItemSecond.dataset.tabItemSecond = 'is-selected';
        tabItemThird.dataset.tabItemThird = 'is-listed';

        // Меняем значение data у таба
        tabFirst.dataset.tabFirst = 'is-listed';
        tabSecond.dataset.tabSecond = 'is-selected';
        tabThird.dataset.tabThird = 'is-listed';
      } else if (evt.target === tabThird) {
        // Показываем третий список
        planFirst.style.display = 'none';
        planSecond.style.display = 'none';
        planThird.style.display = 'grid';

        // Перекидываем класс модификатора на выбранный элемент таба
        tabItemFirst.classList.remove('tab-list__item--selected');
        tabItemSecond.classList.remove('tab-list__item--selected');
        tabItemThird.classList.add('tab-list__item--selected');

        // Перекидываем класс модификатора на выбранный таб
        tabFirst.classList.remove('tab-list__link--selected');
        tabSecond.classList.remove('tab-list__link--selected');
        tabThird.classList.add('tab-list__link--selected');

        // Меняем значения data у списков
        planFirst.dataset.planFirst = 'is-hidden';
        planSecond.dataset.planSecond = 'is-hidden';
        planThird.dataset.planThird = 'is-shown';

        // Меняем значение data у элементов таба
        tabItemFirst.dataset.tabItemFirst = 'is-listed';
        tabItemSecond.dataset.tabItemSecond = 'is-listed';
        tabItemThird.dataset.tabItemThird = 'is-selected';

        // Меняем значение data у таба
        tabFirst.dataset.tabFirst = 'is-listed';
        tabSecond.dataset.tabSecond = 'is-listed';
        tabThird.dataset.tabThird = 'is-selected';
      }
    }
  });
};

export {tabInit};
