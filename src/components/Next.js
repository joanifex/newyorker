import React from 'react';

const Next = ({ nextCartoon }) => {
  const handleClick = (e) => {
    e.target.blur();
    nextCartoon();
  }

  return(
    <button onClick={handleClick}>
      Next
    </button>
  );
};

export default Next;
