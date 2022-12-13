// import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }
  localStorage.setItem("feedback-form-state", JSON.stringify({email: email.value, message: message.value}))
  console.log({email: email.value, message: message.value});
  event.currentTarget.reset();
}

