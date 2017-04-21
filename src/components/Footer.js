import React from 'react';
import Next from './Next';

const Footer = ({ nextCartoon }) => {
  return(
    <div className="footer">
      <Next nextCartoon={nextCartoon} />
    </div>
  );
}

export default Footer;
