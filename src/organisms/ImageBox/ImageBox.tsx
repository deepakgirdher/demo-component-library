import React from "react";
import "./ImageBox.scss";

export interface ImageBoxProps {
  boxImages: string[];
}

const ImageBox = (props: ImageBoxProps) => {
  return (
    <div className="imageBox">
      <div className="imageBoxMainPic">
        <img src={props.boxImages[0]} alt="" />
      </div>
      <div className="imageBoxThumbnails">
        <img src={props.boxImages[1]} alt="" />
        <img src={props.boxImages[2]} alt="" />
        <img src={props.boxImages[3]} alt="" />
        <img src={props.boxImages[4]} alt="" />
      </div>
    </div>
  );
};

export default ImageBox;
