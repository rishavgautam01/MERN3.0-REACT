// Card.js
import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/300" alt="Card Image" className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-content">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;