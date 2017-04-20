import React from 'react';
import Caption from './Caption';

const Cartoon = ({ cartoon }) => (
  <div className="card">
    <img src={cartoon} className="image" alt="New Yorker Cartoon"/>
    <Caption />
  </div>
);

export default Cartoon;
