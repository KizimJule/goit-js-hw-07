import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const cardsItems = createImgCollection(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsItems);

function createImgCollection(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
gallery.addEventListener(`click`, openModalWind);
const instance = basicLightbox.create(
  `
    <div class="modal">
    <img src="" width="700" height="500">
    </div>
	`,
  {
    onShow: () => {
      document.addEventListener(`keydown`, closeModalWind);
    },

    onClose: () => {
      document.removeEventListener(`keydown`, closeModalWind);
    },
  }
);

function openModalWind(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;
  instance.show();
}

function closeModalWind(evt) {
  if (evt.key === 'Escape') {
    instance.close();
    return;
  }
}
