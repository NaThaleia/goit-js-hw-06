// Задание 10
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let size = 30;

const createBoxes = (amount) => {
  let string = "";

  if (amount === "" || amount < 0 || amount > 100) {
    return;
  }

  for (let i = 0; i < amount; i += 1) {
    string += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }

  refs.boxes.insertAdjacentHTML("beforeend", string);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  size = 30;
};

refs.btnCreate.addEventListener("click", () =>
  createBoxes(parseInt(refs.input.value))
);
refs.btnDestroy.addEventListener("click", destroyBoxes);
