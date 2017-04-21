import React from 'react';
import Caption from './Caption';

const Cartoon = ({ cartoon, caption, nextCartoon }) => (
  <div className="card">
    <div className="card-image" onClick={nextCartoon} >
      <img src={cartoon} className="cartoon-image" alt="New Yorker Cartoon"/>
    </div>
    <div className="card-text">
      <Caption caption={caption}/>
    </div>
  </div>
);

export default Cartoon;
