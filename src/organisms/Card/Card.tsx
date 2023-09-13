import React from "react";
import "./Card.scss";

export interface CardProps {
  cardImage: string;
  title: string;
  subTitle: string;
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  return (
    <div className="imageCard">
      <div className="imageCardImage">
        <img src={props.cardImage} alt="" />
      </div>
      <div className="imageCardInfo">
        <div className="imageCardInfoTitle">{props.title}</div>
        <div className="imageCardInfoSubTitle">{props.subTitle}</div>
      </div>
    </div>
  );
};

export default Card;
