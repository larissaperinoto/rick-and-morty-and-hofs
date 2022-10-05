import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterCard({ characters }) {
  return (
    <div className="character-container">
      {
       characters.map(({ id, image, name, status, info}) => (
          <div key={ id } >
            <img src={ image } alt={ name } />
            <h3>{ name }</h3>
            <p>{ `status: ${status}` }</p>
            {/* <p>{ info }</p> */}
          </div>
       ))
      }
    </div>
  )
}

CharacterCard.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
