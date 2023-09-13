import React from "react";
import "./RatingBox.scss";

export interface CardProps {
  rating: string;
  ratingLabel: string,
  ratingCount: string,
  onClick?: () => void;
}

const RatingBox = (props: CardProps) => {
  return (
    <div className="ratingCard">
      <div className="ratingInfo">
        <div className="ratingLabel">
          {props.ratingLabel}
        </div>
        <div className="ratingCount">
          {props.ratingCount} ratings
        </div>
      </div>
      <div className="ratingChip">
        <span>{props.rating}</span>
      </div>
    </div>
  );
};

export default RatingBox;
