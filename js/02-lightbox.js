import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// 1.
const galleryContainer = document.querySelector('.gallery');
const picterListMarkup = createPicterListMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picterListMarkup);

// подпись img
const lightboxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
function createPicterListMarkup(picters) {
  return picters.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
    `;
  })
    .join('');
}