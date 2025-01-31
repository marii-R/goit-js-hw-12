import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImages } from './js/render-functions';
import { fetchImage } from './js/pixabay-api';

const fetchImageForm = document.querySelector('.search-form');
const formInput = document.querySelector('.search-input');
const formBtn = document.querySelector('.search-btn');
const imagesListEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
fetchImageForm.addEventListener('submit', event => {
  event.preventDefault();
    const query = formInput.value.trim();
    
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
      messageColor: '#ffffff',
      backgroundColor: '#9090ff',
    });
    return;
    }
    
  imagesListEl.innerHTML = '';
    loader.classList.add('active');
    
  fetchImage(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: '#ff4141',
        });
          
        loader.classList.remove('active');
        return;
      }
        
        imagesListEl.insertAdjacentHTML('beforeend', renderImages(data.hits));

       const images = imagesListEl.querySelectorAll('.gallery-img');
       const imagesToLoad = [...images].slice(0, 10);
       Promise.all(imagesToLoad.map(img => new Promise(resolve => (img.onload = resolve))));

      loader.classList.remove('active'); 
      lightbox.refresh();
    })
      
    .catch(error => {
      loader.classList.remove('active');
      iziToast.error({
        message: 'Something went wrong, please try again later.',
        position: 'topRight',
        messageColor: '#ffffff',
        backgroundColor: '#ff4141',
        
      });
      console.error('Error fetching data:', error);
    });
});