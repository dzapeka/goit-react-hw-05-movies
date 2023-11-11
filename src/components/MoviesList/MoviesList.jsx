import React from 'react';
import { StyledLink, StyledList, StyledListItem } from './MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies.length > 0 && (
        <StyledList>
          {movies.map(({ id, title, name }) => (
            <StyledListItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default MoviesList;
