import React from 'react';
import { StyledText, StyledTitle } from './ReviewsList.styles';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <StyledTitle>Author: {author}</StyledTitle>
              <StyledText>{content}</StyledText>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;
