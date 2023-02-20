//todo: Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const bodyRef = document.querySelector("body");
const fieldColorRef = document.querySelector(".color");
const btnChangeColorRef = document.querySelector(".change-color");

btnChangeColorRef.addEventListener("click", pressOnBtnChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function pressOnBtnChangeColor(event) {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  fieldColorRef.innerHTML = `${randomColor}`;
}
