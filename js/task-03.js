const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//todo: Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список <ul class="gallery"></ul>

//- Используй массив объектов images для создания элементов <img> вложенных в <li>.

//- Для создания разметки используй шаблонные строки и метод  insertAdjacentHTML().

//- Все элементы галереи должны добавляться в DOM за одну операцию вставки.

//- Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const listGalleryEl = document.querySelector(".gallery");

const makeItemsGalleryEl = (images) => {
  const { url, alt } = images;

  return images.map((image) => {
    const itemGalleryRef = document.createElement("li");
    itemGalleryRef.classList.add('gallery-list__item');

    itemGalleryRef.insertAdjacentHTML(
      "beforeend",
      `<img width=100% src="${image.url}" alt="${image.alt}"></img>`
    );
    return itemGalleryRef;
  });
};

const itemsGalleryEl = makeItemsGalleryEl(images);
listGalleryEl.append(...itemsGalleryEl);

console.log(listGalleryEl);




