import React from 'react';
import Next from './Next';
import RandomCaption from './RandomCaption';

const Footer = ({ nextCartoon, randomCaption }) => {
  return(
    <div className="footer">
      <Next nextCartoon={nextCartoon} />
      <RandomCaption randomCaption={randomCaption}/>
    </div>
  );
}

export default Footer;
