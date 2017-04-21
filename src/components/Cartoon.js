import React from 'react';

const Cartoon = ({ cartoon, nextCartoon }) => (
  <div className="card">
    <div className="card-image" onClick={nextCartoon} >
      <img src={cartoon} className="cartoon-image" alt="New Yorker Cartoon"/>
    </div>
    <div className="card-text">
      <span className="caption">
        "I call my own shots, largely based on an accumulation of data, and everyone knows it."
      </span>
    </div>
  </div>
);

export default Cartoon;
