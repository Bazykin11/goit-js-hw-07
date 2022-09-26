import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function creatGalleryMarkup(items) {
    return items.map((item) => `
    <div class=gallery-item>
    <a class=gallery-link href="${item.original}">
    <img class=gallery-img src="${item.preview}"
    alt="${item.description}"
    data-source="${item.original}"
    height = 240px,
    width = 342px

     />
    </a>
    </div>
    `
    ).join("")
}

const addGalleryMarkup = creatGalleryMarkup(galleryItems);
gallery.innerHTML = addGalleryMarkup;
// gallery.insertAdjacentHTML = ('beeforend', addGalleryMarkup)

gallery.addEventListener('click', openModal);

function openModal (evt){
    blockStandartAction(evt);
    if (evt.target.nodeName !=="IMG"){
        return;
    }
    const instance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}"  width="800" height="600">`);
        instance.show();
    gallery.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape'){
        instance.close();
 
    }
});
}



function blockStandartAction (evt){
    evt.preventDefault();
}