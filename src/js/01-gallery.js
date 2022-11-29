// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryPhoto = document.querySelector(".gallery");
const items = galleryItems;

function createGalleryItems(items) {
    return items.map((item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("");
}


galleryPhoto.innerHTML = createGalleryItems(galleryItems);
const lightbox = new SimpleLightbox(".gallery__item", { captionsData: "alt" , captionDelay: 250} );
console.log(galleryItems);
