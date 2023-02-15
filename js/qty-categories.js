// todo: Напиши скрипт который:

//- Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

//- Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

//- В результате, в консоли будут выведены такие сообщения:


//* Number of categories: 3

const itemsCategories = document.querySelectorAll('.item');
console.log("Number of categories:",itemsCategories.length);


//* Category: Animals
//* Elements: 4

console.log("Category: Animals");

    // 1-й варіант
const category = document.querySelectorAll('.item ul');

console.log("V1 Elements:",category[0].children.length);

    // 2-й варіант
const listCategories = document.querySelector('#categories')

console.log("V2 Elements:",listCategories.firstElementChild.children[1].children.length);


//* Category: Products
//* Elements: 3

console.log("Category: Products");
console.log("Elements:",category[1].children.length);


//* Category: Technologies
//* Elements: 5

console.log("Category: Technologies");
console.log("Elements:",category[2].children.length);



























