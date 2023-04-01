const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '4564300-2fd2408749091e59a75f2c78f';

export const fetchImage = (data,page) => {
  return fetch(
    `${BASE_URL}?q=${data}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
