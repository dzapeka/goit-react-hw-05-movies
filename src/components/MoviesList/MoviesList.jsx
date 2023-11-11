import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesList;
