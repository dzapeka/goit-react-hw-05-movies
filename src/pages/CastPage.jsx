import CastList from 'components/CastList/CastList';
import Loader from 'components/Loader/Loader';
import { fetchCredits } from 'js/themoviedb-api';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchCredits(movieId);
        setCast(cast);
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
      {cast.length > 0 && <CastList cast={cast} />}
    </>
  );
};

export default CastPage;
