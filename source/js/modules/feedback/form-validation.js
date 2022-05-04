const formFeedback = document.querySelector('[data-feedback-form]'); // Форма
const formNameInput = formFeedback.querySelector('[data-feedback-name]'); // Инпут имени
const formTelInput = formFeedback.querySelector('[data-feedback-tel]'); // Инпут телефона

const telPattern = /^([-+()0-9\s]+)$/; // Паттерн телефона

// Валидация формы
const initFormValidate = () => {
  // Тестим ввод имени
  formNameInput.addEventListener('input', () => {
    const nameValue = formNameInput.value; // Значение поля имени

    // Проверяем длину имени и паттерн
    if (nameValue.length < 1) {
      formNameInput.setCustomValidity('Имя должно состоять минимум из 1 символа');
      formNameInput.style.outline = '2px solid #CC0000';
    } else {
      formNameInput.setCustomValidity('');
      formNameInput.style.outline = '';
    }
  });

  // Тестим ввод телефона
  formTelInput.addEventListener('input', () => {
    const telValue = formTelInput.value; // Значение поля телефона

    // Проверяем паттерн
    if (!telPattern.test(telValue)) {
      formTelInput.setCustomValidity('Номер телефона может содержать только числа');
      formTelInput.style.outline = '2px solid #CC0000';
    } else {
      formTelInput.setCustomValidity('');
      formTelInput.style.outline = '';
    }
  });
};

export {initFormValidate, formFeedback, formNameInput, formTelInput};
