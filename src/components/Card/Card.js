import React from 'react';
import "./Card.css"


const Card = (props) => (
  <div className="card" key={props.idx}>
    <img src={props.thumbnail} alt="thumbnail" />
    <div className="card-body">
      <h2>{props.title}</h2>
      <h4><a href={props.github_link} target="_blank" rel="noopener noreferrer">{props.github_link}</a></h4>
      <p>{props.description}</p>
      <div className="space-between-container">
        <div>
          <h4>{props.date}</h4>
          <span id="label-last-updated">{`Last Updated: ${props.lastUpdated}`}</span>
        </div>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link-btn">Demo</a>
      </div>
    </div>
  </div>
);

export default Card;