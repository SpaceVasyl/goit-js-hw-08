// import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const savedSettings = localStorage.getItem("feedback-form-state");
const parsedSettings = JSON.parse(savedSettings);

if (localStorage.length != 1) {
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;
}

form.addEventListener("input", printInput);
function printInput(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
  localStorage.setItem("feedback-form-state", JSON.stringify({email: email.value, message: message.value}))
}


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log({email: email.value, message: message.value});
  event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

