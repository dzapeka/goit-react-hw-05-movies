import axios from 'axios';

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGZkNjgyMzgzZDExNWRmZGM3NjMxOGQzMTZkNDUxNCIsInN1YiI6IjY1NDk3ZjE3MzkxYjljMDExZDJmYTE2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0LXtY5S_ODGIpkS6EqgxTD40UljZNo8t5hY8kE5hiG0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
export const DEFAULT_IMG_PLACEHOLDER =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
  params: {
    language: 'en-US',
  },
});

const fetchData = async (endpoint, params = {}) => {
  const response = await axiosInstance.get(endpoint, { params });
  return response.data;
};

export const fetchTranding = () => fetchData('/trending/movie/day');
export const fetchDetails = movieId => fetchData(`/movie/${movieId}`);
export const fetchCredits = movieId => fetchData(`/movie/${movieId}/credits`);
export const fetchReviews = movieId => fetchData(`/movie/${movieId}/reviews`);

export const searchMovie = (query, page = 1) =>
  fetchData('/search/movie', {
    query,
    include_adult: false,
    language: 'en-US',
    page,
  });
