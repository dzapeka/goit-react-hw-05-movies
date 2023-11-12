import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchMoviesForm/SearchMoviesForm';
import Section from 'components/Section/Section';
import { searchMovie } from 'js/themoviedb-api';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const searchQuery = searchParams.get('query');

  const onSearchFormSubmit = ({ searchQuery }) =>
    setSearchParams({ query: searchQuery });

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setSearchParams({
  //     query: event.currentTarget.elements.searchQuery.value.trim(),
  //   });
  // };

  useEffect(() => {
    if (!searchQuery) return;
    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await searchMovie(searchQuery);
        console.log(results);
        if (results.length === 0) {
          Notify.info('No movies found. Please try a different search.');
        }
        setMovies(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [searchQuery]);

  return (
    <Section>
      <SearchForm onSubmit={searchQuery => onSearchFormSubmit(searchQuery)} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {movies.length > 0 && (
            <MoviesList movies={movies} location={location} />
          )}
        </>
      )}
    </Section>
  );
};

export default MoviesPage;
