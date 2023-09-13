import React from "react";
import "./OverlayCard.scss";

export interface CardProps {
  cardImage: string;
  title: string;
  onClick?: () => void;
}

const OverlayCard = (props: CardProps) => {
  return (
    <div className="overlayCardMain">
      <img
        src={props.cardImage}
        alt=""
      />
      <div className="overlayCardInfo">
        <div className="overlayCardTitle">{props.title}</div>
      </div>
    </div>
  );
};

export default OverlayCard;
