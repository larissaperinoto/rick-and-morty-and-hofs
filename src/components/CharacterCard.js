import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterCard({ characters }) {
  return (
    <main>
      {
       characters.map(({ id, image, name, status, info}) => (
          <div key={ id } >
            <img src={ image } alt={ name } />
            <h3>{ name }</h3>
            <p>{ `status: ${status}` }</p>
            <p>{ info }</p>
          </div>
       ))
      }
    </main>
  )
}

CharacterCard.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
