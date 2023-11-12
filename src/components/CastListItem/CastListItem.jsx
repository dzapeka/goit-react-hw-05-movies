import { DEFAULT_IMG_PLACEHOLDER, IMAGE_BASE_URL } from 'js/themoviedb-api';
import React from 'react';
import {
  CastListItemContainer,
  ProfileName,
  ProfilePhoto,
} from './CastListItem.styled';

const CastListItem = ({ name, character, profile_path }) => {
  return (
    <CastListItemContainer>
      <ProfilePhoto
        src={
          profile_path
            ? `${IMAGE_BASE_URL}/w200/${profile_path}`
            : DEFAULT_IMG_PLACEHOLDER
        }
        alt={name}
        width="200"
      />
      <div>
        <ProfileName>{name}</ProfileName>
        <p>{character}</p>
      </div>
    </CastListItemContainer>
  );
};

export default CastListItem;
