import React from "react";
import "../Assets/css/card.css";

const ImageCard = ({ path, title }) => {
  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={path} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">{title}</h5>
      </div>
    </div>
  );
};

export default ImageCard;
