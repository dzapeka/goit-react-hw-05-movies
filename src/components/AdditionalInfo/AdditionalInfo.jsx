import Loader from 'components/Loader/Loader';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AdditionalInfoContainer,
  StyledList,
  StyledNavLink,
} from './AdditionalInfo.styled';

const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

const AdditionalInfo = ({ movieId }) => {
  return (
    <>
      <AdditionalInfoContainer>
        <h3>Additional information</h3>
        <StyledList>
          <li>
            <StyledNavLink to={`/movies/${movieId}/cast`}>Cast</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={`/movies/${movieId}/reviews`}>
              Reviews
            </StyledNavLink>
          </li>
        </StyledList>
      </AdditionalInfoContainer>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
