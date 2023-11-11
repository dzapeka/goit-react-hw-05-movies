import CastListItem from 'components/CastListItem/CastListItem';
import React from 'react';

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <CastListItem
            name={name}
            character={character}
            profile_path={profile_path}
          />
        </li>
      ))}
    </ul>
  );
};

export default CastList;
