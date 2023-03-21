import React from "react";
import './styles/slider.css';
import "./styles/DescriptionLocation.css"

function Location({location}) {         
    return (         
        <div className="location">                              
            <span >{location}</span>                
        </div> 
   )    
}

export default Location