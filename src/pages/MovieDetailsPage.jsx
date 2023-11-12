import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import { fetchDetails } from 'js/themoviedb-api';
import { Notify } from 'notiflix';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BackButton from 'components/BackButton/BackButton';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await fetchDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        Notify.failure('Unable to load movie details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <Section>
        <Link to={backLinkRef.current} className="link">
          <BackButton />
        </Link>
        {isLoading && <Loader />}
        {movieDetails !== null && (
          <>
            <MovieDetails movie={movieDetails} />
            <AdditionalInfo movieId={movieId} />
          </>
        )}
      </Section>
    </>
  );
};

export default MovieDetailsPage;
