import { DEFAULT_IMG_PLACEHOLDER, IMAGE_BASE_URL } from 'js/themoviedb-api';
import React from 'react';
import {
  MovieDetailsContainer,
  MovieInfoContainer,
  StyledText,
} from './MovieDetails.styles';
import PageTitle from 'components/PageTitle/PageTitle';

const MovieDetails = ({ movie }) => {
  return (
    <MovieDetailsContainer>
      <img
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}/w300/${movie.poster_path}`
            : DEFAULT_IMG_PLACEHOLDER
        }
        alt={movie.title}
        width={250}
      />
      <MovieInfoContainer>
        <PageTitle title={movie.title} />
        <StyledText>
          User Score: {Math.round(movie.vote_average * 10)}%{' '}
        </StyledText>
        <h2>Overview</h2>
        <StyledText>{movie.overview}</StyledText>
        <h2>Genres</h2>
        <StyledText>
          {movie.genres.map(genre => genre.name).join(' ')}
        </StyledText>
      </MovieInfoContainer>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
