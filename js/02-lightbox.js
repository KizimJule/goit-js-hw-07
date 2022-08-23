import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector('.gallery');

const cardsItems = createImgCollection(galleryItems);

galleryEL.insertAdjacentHTML('beforeend', cardsItems);

function createImgCollection(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
</div>`;
    })
    .join('');
}
// galleryEL.addEventListener(`click`, SimpleLightbox);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
