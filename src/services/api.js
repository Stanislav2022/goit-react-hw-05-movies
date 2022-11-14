import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '227276901e21542aa689a1c37fca7e3b',
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data.results;
};

export const getSearch = async search => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: search,
      page: 1,
    },
  });

  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
