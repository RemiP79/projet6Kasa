import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';

function Rating({item}) {
    const { id } = useParams();   
    if(item.id===id){        
    return (  
        
            <div className="location">                              
                <span >{item.rating}</span> 
                              
            </div>   
    
   )
    
    }
}
export default Rating