import React from 'react';

const RandomCaption = ({ randomCaption }) => {
  const handleClick = (e) => {
    e.target.blur();
    randomCaption();
  }

  return(
    <button onClick={handleClick}>
      Random Caption
    </button>
  );
};

export default RandomCaption;
