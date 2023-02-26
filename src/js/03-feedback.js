const throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const formData = {};

putStorageData();

function onFormInputChange(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function putStorageData() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  const parsedStorageData = JSON.parse(storageData);

  if (parsedStorageData) {
    refs.input.value = parsedStorageData.email || '';
    refs.textarea.value = parsedStorageData.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

refs.form.addEventListener('input', throttle(onFormInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);
