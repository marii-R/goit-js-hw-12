import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImages } from './js/render-functions';
import { fetchImage } from './js/pixabay-api';

const fetchImageForm = document.querySelector('.search-form');
const formInput = document.querySelector('.search-input');
const imagesListEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let query = '';
let page = 1;
const PER_PAGE = 15;
let totalHits = 0;


const getImages = async () => {
  try {
    loader.classList.add('active');
    loadMoreBtn.classList.add('is-hidden');

    const data = await fetchImage(query, page);

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, no images found. Try another search!',
        position: 'topRight',
        messageColor: '#ffffff',
        backgroundColor: '#ff4141',
      });
      return;
    }

    imagesListEl.insertAdjacentHTML('beforeend', renderImages(data.hits));
    lightbox.refresh();

    totalHits = data.totalHits;

    if (page * PER_PAGE >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageColor: '#ffffff',
        backgroundColor: '#ff4141',
      });
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
      messageColor: '#ffffff',
      backgroundColor: '#ff4141',
    });
  } finally {
    loader.classList.remove('active');
  }
};


fetchImageForm.addEventListener('submit', event => {
  event.preventDefault();
  query = formInput.value.trim();
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
  page = 1;
  totalHits = 0;
  getImages();
});


loadMoreBtn.addEventListener('click', () => {
  page += 1;
  getImages();
});


const smoothScroll = () => {
  const galleryCard = document.querySelector('.gallery-card');
  if (galleryCard) {
    const cardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
};