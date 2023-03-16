import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import "./styles/DescriptionLocation.css"

function Location({location}) {
         
    return (  
        
            <div className="location">                              
                <span >{location}</span>                
            </div>   
    
   )
    
    }

export default Location