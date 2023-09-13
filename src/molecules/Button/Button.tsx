import React from "react";
import { Icon } from "../../atoms";
import "./Button.scss";

export interface ButtonProps {
    label: string;
    type: string;
    iconButton: boolean;
    iconName: string;
    onClick?: ()=>void;
}

const Button = (props:ButtonProps) => {
    switch(props.type){
        case "primary":
             return <button className="primaryButton" onClick={props.onClick}>{props.iconButton ? <><Icon name="test"/>&nbsp;</>: <></>} <span>{props.label}</span></button>
        case "secondary":
             return <button className="secondaryButton" onClick={props.onClick}>{props.iconButton ? <><Icon name="test"/>&nbsp;</>: <></>} <span>{props.label}</span></button>
        default:
             return <button className="primaryButton" onClick={props.onClick}>{props.iconButton ? <><Icon name="test"/>&nbsp;</>: <></>} <span>{props.label}</span></button>
    }
   
    
};

export default Button;