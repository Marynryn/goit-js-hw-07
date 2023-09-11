import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </li>
  `
    )
    .join("");
   
}


function handleClick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      return;
      
    }
    const currentGalIt = event.target.closest(".gallery__item");
  const galleryItem = galleryItems.find(({description}) => description === currentGalIt.description);
    console.log(galleryItem);

   

const instance = basicLightbox.create(`<div class="modal">
<img src = "${event.target.dataset.source}"  width="800" height="600"></div>
`, 
{ onShow: (instance) => {
  window.addEventListener("keydown", escBtn);
},

onClose: (instance) => {
  window.removeEventListener("keydown", escBtn)
}

});

   instance.show()
  function escBtn(event) {
   
    if (event.code === "Escape"){
         
 instance.close()}
    }
  
  }
   


 
  
  
 
  
