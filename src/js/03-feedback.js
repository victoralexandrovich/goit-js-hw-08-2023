import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: "",
  message: "",
};

emailInput.value = savedData.email;
messageTextarea.value = savedData.message;

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
