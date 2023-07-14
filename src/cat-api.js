import axios from 'axios';

function fetchBreeds() {
  return axios.get(`/breeds`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}

function fetchCatByBreed(catId) {
  return axios.get(`/images/search?breed_ids=${catId}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}

export { fetchBreeds, fetchCatByBreed };
