import React from 'react';

const Cartoon = ({ cartoon }) => (
  <div className="card">
    <img src={cartoon} className="image" alt="New Yorker Cartoon"/>
    <p className="text-center">
      <em>
        "Hi. I'd like to add you to my professional network on LinkedIn."
      </em>
    </p>
  </div>
);

export default Cartoon;
