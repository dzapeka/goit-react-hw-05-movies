import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;
