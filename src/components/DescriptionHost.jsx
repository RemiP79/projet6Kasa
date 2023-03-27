import React from "react";
import './styles/DescriptionHost.css';

function Host({props}) {         
    return (          
        <div className="host">                              
            <div className="hostName">{props.name}</div> 
            <div className="divHostImg">
                <img src = {props.picture} alt = {props.name} className="hostImg"/> 
            </div>               
        </div>     
   )    
}
export default Host