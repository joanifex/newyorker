import React from 'react';

const Cartoon = ({ cartoon }) => (
  <div className="cartoon">
    <img src={cartoon} className="image" alt="New Yorker Cartoon"/>
  </div>
);

export default Cartoon;
