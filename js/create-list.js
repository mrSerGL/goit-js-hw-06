console.log("===== Задание 2 ===== ");

// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector('#ingredients')

const makeList = ingredients => { 
    return ingredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = item;

    return itemEl;
    });
};

const list = makeList(ingredients);
listEl.append(...list)
console.log(listEl);





















