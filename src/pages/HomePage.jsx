import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import PageTitle from 'components/PageTitle/PageTitle';
import Section from 'components/Section/Section';
import { fetchTranding } from 'js/themoviedb-api';
import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { useEffect } from 'react';

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrandingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTranding();
        setTrandingMovies(results);
      } catch (error) {
        Notify.failure('Unable to load tranding movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrandingMovies();
  }, []);
  return (
    <>
      <Section>
        <PageTitle title="Tranding today" />
        {isLoading && <Loader />}
        {trandingMovies.length > 0 && <MoviesList movies={trandingMovies} />}
      </Section>
    </>
  );
};

export default HomePage;
