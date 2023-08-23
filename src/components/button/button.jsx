import React from 'react';

const CharacterChangeButton = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className='change-character-button'>
      {label}
    </button>
  );
};

export default CharacterChangeButton;
