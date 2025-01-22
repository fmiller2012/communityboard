import React from "react";
import "./ResourceCard.css"
const ResourceCard = (props) => {
  return (
    <div className = "ResourceCard">
      <div className = "box">
	<img src={props.thumbnail} alt={props.card} className="thumbnail" />
        <div className = "textContainer">
          <h3>{props.card}</h3>
          <p className = "clickable-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
