import React from "react";
import "./Icon.scss";

export interface IconProps {
    name:string;
}

const Icon = (props:IconProps) => {
    return <div className="iconAtom"><img src="https://cdn0.iconfinder.com/data/icons/travel-cool-vector-1/128/6-1024.png"></img></div>
    
};

export default Icon;