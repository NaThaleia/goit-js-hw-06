const getAllItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${getAllItems.length}`);

getAllItems.forEach((document) => {
  const countEl = document.querySelector("h2");
  const countElLength = document.querySelectorAll("li");

  console.log(`Category: ${countEl.textContent}`);
  console.log(`Elements: ${countElLength.length}`);
});
