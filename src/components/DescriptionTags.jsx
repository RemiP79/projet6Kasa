import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import "./styles/DescriptionLocation.css"

function Tags({item}) {
    const { id } = useParams();   
    if(item.id===id){        
    return (  
        
            <div className="tags">                              
                <span >{item.tags}</span>                
            </div>   
    
   )
    
    }
}
export default Tags