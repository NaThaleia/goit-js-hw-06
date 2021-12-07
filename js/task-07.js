const textRef = document.getElementById("text");
const fontSizeRef = document.getElementById("font-size-control");

const inputChange = () => (textRef.style.fontSize = `${fontSizeRef.value}px`);

fontSizeRef.addEventListener("input", inputChange);
