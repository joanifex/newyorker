import React from 'react';
import Caption from './Caption';

const Cartoon = ({ cartoon, nextCartoon }) => (
  <div className="card">
    <div className="card-image" onClick={nextCartoon} >
      <img src={cartoon} className="cartoon-image" alt="New Yorker Cartoon"/>
    </div>
    <div className="card-text">
      <Caption/>
    </div>
  </div>
);

export default Cartoon;
