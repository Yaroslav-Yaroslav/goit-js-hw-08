import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const listRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
listRef.insertAdjacentHTML('afterbegin', galleryMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(galleryImages) {
  return galleryImages
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

