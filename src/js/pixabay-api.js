import axios from 'axios';

const API_KEY = '48549557-eddb482997c8ef9e0172f80ee';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export const fetchImage = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};