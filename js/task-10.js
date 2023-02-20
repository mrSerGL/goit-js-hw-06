//todo:    Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div> */

//todo:     Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

//- Размеры самого первого <div> - 30px на 30px.

//- Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

//- Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

/* function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */

//todo:  Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputFieldRef = document.querySelector("input");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const divsBox = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(a) {
  const amount = inputFieldRef.value;

  let currentSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const tempColor = getRandomHexColor();

    divsBox.insertAdjacentHTML(
      "beforeend",
      `<div class="tempDiv" style='background-color: ${tempColor};  width: ${currentSize}px; height: ${currentSize}px;'></div>`
    );

    currentSize += 10;
  }

  //- textFieldRef.style.fontSize = `${inputRangeRef.value}px`;

  console.log(divsBox);
}

function destroyBoxes() {
  const divToDelete = document.querySelectorAll(".tempDiv");

  for (const div of divToDelete) {
    if (div.className === "tempDiv") {
      div.remove();
    }
  }

  console.log(divsBox);
}

btnCreateRef.addEventListener("click", createBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);
