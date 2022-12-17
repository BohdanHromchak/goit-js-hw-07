import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
// console.log(SimpleLightbox);
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" >`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
