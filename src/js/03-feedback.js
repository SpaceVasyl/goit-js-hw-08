import throttle from "lodash.throttle";
const FORM_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const savedSettings = localStorage.getItem(FORM_KEY);
const parsedSettings = JSON.parse(savedSettings);

if (parsedSettings) {
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;
}

form.addEventListener("input", throttle(printInput, 500))
  function printInput(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = this;
  localStorage.setItem(FORM_KEY, JSON.stringify({email: email.value, message: message.value}))
};


form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log({email: email.value, message: message.value});
  event.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
});


