import React from "react";
import "./Label.scss";

export interface LabelProps {
    type:string;
    text:string;
}

const Label = (props:LabelProps) => {
    switch (props.type) {
        case 'title':
            return <div className="advTitle">{props.text}</div>
            break;
        
        case 'subtitle':
            return <div className="advSubTitle">{props.text}</div>
            break;

        default:
            return <div className="advNormalText">{props.text}</div>
            break;
    }
    return <div className="LabelAtom"><img src="https://cdn0.Labelfinder.com/data/Labels/travel-cool-vector-1/128/6-1024.png"></img></div>
    
};

export default Label;