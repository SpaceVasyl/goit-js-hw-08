import throttle from "lodash.throttle";

const form = document.querySelector("feedback-form");
form.addEventListener("input", handleInput);

function handleInput(event) {
    event.preventDefault();
    const {
    elements: { email, message }
  } = event.currentTarget;
}
