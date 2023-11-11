import Loader from 'components/Loader/Loader';
import {
  DEFAULT_IMG_PLACEHOLDER,
  IMAGE_BASE_URL,
  fetchDetails,
} from 'js/themoviedb-api';
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
      <Link to={backLinkRef.current}>
        <button>&#8592; Go back</button>
      </Link>
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <>
          <h1>{movieDetails.title}</h1>
          <img
            src={
              movieDetails.poster_path
                ? `${IMAGE_BASE_URL}/w300/${movieDetails.poster_path}`
                : DEFAULT_IMG_PLACEHOLDER
            }
            alt={movieDetails.title}
            width={250}
          />
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}% </p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
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
    </>
  );
};

export default MovieDetailsPage;
