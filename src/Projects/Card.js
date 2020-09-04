import React from "react";
import "./Card.css";

function Card({ src, title, description }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2 style={{ fontSize: "16px" }}>{title}</h2>
        <h2>{description}</h2>
      </div>
    </div>
  );
}

export default Card;
