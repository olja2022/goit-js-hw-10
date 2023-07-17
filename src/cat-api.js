import axios from 'axios';

const API_KEY =
  'live_yCD4XmgpK3eyb4JxpfIyllzkJw7KMIm6stx9yHAMU1aA3RSMTwHNnXEV0d63spd2';
const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `${BASE_URL}/images/search?breed_ids=${breedId}`;
  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching cat:', error);
      throw error;
    });
}
