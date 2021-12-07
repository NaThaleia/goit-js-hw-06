const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", (event) => {
  let inputValue = event.currentTarget.value;
  if (inputValue.length === parseInt(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
});
