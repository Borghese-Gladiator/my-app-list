import React from "react";
import './SortButton.css';

function SortButton(props) {
  return (
    <button
      type="button"
      className="sort-button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Sort by: </span>
      <span>{props.name}</span>
    </button>
  );
}

export default SortButton;
