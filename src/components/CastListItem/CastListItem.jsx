import { DEFAULT_IMG_PLACEHOLDER, IMAGE_BASE_URL } from 'js/themoviedb-api';
import React from 'react';

const CastListItem = ({ name, character, profile_path }) => {
  return (
    <>
      <img
        src={
          profile_path
            ? `${IMAGE_BASE_URL}/w200/${profile_path}`
            : DEFAULT_IMG_PLACEHOLDER
        }
        alt={name}
        width="200"
      />
      <div>
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </>
  );
};

export default CastListItem;
