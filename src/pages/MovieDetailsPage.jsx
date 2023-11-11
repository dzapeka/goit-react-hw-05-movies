import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import { fetchDetails } from 'js/themoviedb-api';
import { Notify } from 'notiflix';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import BackButton from 'components/BackButton/BackButton';
import PageTitle from 'components/PageTitle/PageTitle';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

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
          {/* <Button label="&#8592; Go Back"></Button> */}
        </Link>
        {isLoading && <Loader />}
        {movieDetails !== null && (
          <>
            <MovieDetails movie={movieDetails} />
            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
                </li>
              </ul>
            </div>

            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
              </Routes>
            </Suspense>
          </>
        )}
      </Section>
    </>
  );
};

export default MovieDetailsPage;
