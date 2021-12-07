const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

let result = {};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  if (email.value && password.value) {
    result["email"] = email.value;
    result["password"] = password.value;
  }

  console.log(result);
  event.currentTarget.reset();
}
