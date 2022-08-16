import React from "react";
import "./NotActiveCard.css";
const NotActiveCard = ({ icon, title }) => {
  return (
    <div className="card-notactive">
      <div className="icon-div-notactive">{icon}</div>
      <hr />
      <div className="text-div">
        <h2>{title} </h2>
      </div>
      <a href="/" className="know-more">
        know more
      </a>
    </div>
  );
};

export default NotActiveCard;
