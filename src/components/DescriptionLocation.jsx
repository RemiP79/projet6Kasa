import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';

function Location({item}) {
    const { id } = useParams();   
    if(item.id===id){        
    return (  
        
            <div className="location">                              
                <span >{item.location}</span>                
            </div>   
    
   )
    
    }
}
export default Location