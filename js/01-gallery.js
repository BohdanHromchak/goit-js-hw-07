import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
// console.log(basicLightbox);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link"><img src="${preview}" data-src="${original}" alt="${description}" class="gallery__image"></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClick);
function onClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.src}">`
  );
  instance.show();
}
