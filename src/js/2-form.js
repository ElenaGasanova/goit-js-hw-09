const bodyEl = document.querySelector('body');
const formEl = document.createElement('form');

bodyEl.append(formEl);

formEl.classList.add('feedback-form');
formEl.setAttribute('autocomplete', 'off');
formEl.innerHTML =
  "<label>Email<input type='email' name='email' autofocus /></label><label>Message<textarea name='message' rows='8'></textarea></label><button type='submit'>Submit</button>";

const onFormInput = event => {
  storage.email = formEl.elements.email.value;
  storage.message = formEl.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(storage));
};

const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.length !== 0) {
  formEl.elements.email.value = savedUserData.email;
  formEl.elements.message.value = savedUserData.message;
}

const storage = {
  email: null,
  message: null,
};

formEl.addEventListener('input', onFormInput);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  console.log(savedUserData);
});
