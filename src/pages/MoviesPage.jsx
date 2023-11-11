import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovie } from 'js/themoviedb-api';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const searchQuery = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({
      query: event.currentTarget.elements.searchQuery.value.trim(),
    });
  };

  useEffect(() => {
    if (!searchQuery) return;
    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await searchMovie(searchQuery);
        setMovies(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="searchQuery"
          placeholder="Search movies..."
          autoFocus
          required
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default MoviesPage;
