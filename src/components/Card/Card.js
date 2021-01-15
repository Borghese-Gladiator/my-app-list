import React from 'react';
import "./Card.css"

const Card = (props) => (
  <div className="card">
    <img src={props.thumbnail} />
    <div className="card-body">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="space-between-container">
        <h4>{props.date}</h4>
        <a href={props.link} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  </div>
);

export default Card;