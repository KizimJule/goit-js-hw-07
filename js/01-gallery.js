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
function openModalWind(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <img src="${evt.target.dataset.source}" width="700" height="500">
    </div>
	`,
    {
      onShow: instance => {
        console.log('add listener');
        document.addEventListener(`keydown`, closeModalWind);

        // addKeydownListener;
        // closeModalWind(evt);
      },
      onClose: instance => {
        document.removeEventListener(`keydown`, closeModalWind);
        // removeKeydownListener;
      },
    }
  );
  instance.show();

  // onShow: instance => {
  //   closeModalWind(evt);
  // };
  // onClose: instance => {
  //   removeKeydownListener;
  // };

  // document.addEventListener(`keydown`, closeModalWind);
  //
  function closeModalWind(evt) {
    // document.removeEventListener(`keydown`, closeModalWind);
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
