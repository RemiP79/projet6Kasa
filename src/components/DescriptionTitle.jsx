import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import './styles/DescriptionTitle.css'

function Title({title}) {
     
          
    return (  
        
            <div className="Title">                              
                <h1 >{title}</h1>                
            </div>   
    
   )
    
    }

export default Title