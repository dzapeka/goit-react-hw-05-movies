import Loader from 'components/Loader/Loader';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { fetchReviews } from 'js/themoviedb-api';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        Notify.failure('Unable to load movie cast');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        'We do not have any reviews for this movie'
      )}
    </>
  );
};

export default ReviewsPage;
