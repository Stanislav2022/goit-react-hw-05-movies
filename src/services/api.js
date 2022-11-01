import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    key: '227276901e21542aa689a1c37fca7e3b',
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('', {
    params: {
      trending: '/trending/get-trending',
    },
  });
  return data;
};

export const getSearch = async () => {
  const { data } = await instance.get('', {
    params: {
      search: '/search/search-movies',
    },
  });
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get('', {
    params: {
      id,
      details: '/movies/get-movie-details',
    },
  });
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get('', {
    params: {
      id,
      credits: '/movies/get-movie-credits',
    },
  });
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get('', {
    params: {
      id,
      reviews: '/movies/get-movie-reviews',
    },
  });
  return data;
};