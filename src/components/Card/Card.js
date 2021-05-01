import React from 'react';
import "./Card.css";;

const Card = ({
  idx,
  link,
  github_link,
  thumbnail,
  title,
  description,
  keywords,
  dateCreated,
  dateLastUpdated
}) => (
  <div className="card" key={idx}>
    <img src={thumbnail} alt="thumbnail" />
    <div className="card-body">
      <h2>{title}</h2>
      <h4><a href={github_link} target="_blank" rel="noopener noreferrer">{github_link}</a></h4>
      <p>{description}</p>
      {
        keywords.map((item, idx) => <span key={`demo_snap_${idx}`} className="chip">{item}</span>)
      }
      <div className="space-between-container">
        <div>
          <h4>{dateCreated}</h4>
          <span id="label-last-updated">{`Last Updated: ${dateLastUpdated}`}</span>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link-btn">Demo</a>
      </div>
    </div>
  </div>
);

export default Card;