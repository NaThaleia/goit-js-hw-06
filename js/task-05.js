const textInput = document.getElementById("name-input");
let output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = event.currentTarget.value;
});
