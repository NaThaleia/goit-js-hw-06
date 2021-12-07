const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.getElementById("ingredients");

// for (let i of ingredients) {
//   const createList = document.createElement("li");
//   createList.classList.add("item");
//   createList.textContent = [i];
//   container.append(createList);
// }

const createList = ingredients.map((element) => {
  const createItem = document.createElement("li");
  createItem.classList.add("item");
  createItem.textContent = element;

  return createItem;
});

container.append(...createList);
