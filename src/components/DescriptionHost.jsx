import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';

function Tags({item}) {
    const { id } = useParams();   
    if(item.id===id){        
    return (  
        
            <div className="host">                              
                <span >{item.host.name}</span> 
                <span><img src = {item.host.picture} alt = {item.host.name} /> </span>               
            </div>   
    
   )
    
    }
}
export default Tags