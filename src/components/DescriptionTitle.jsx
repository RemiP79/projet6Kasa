import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import './styles/DescriptionTitle.css'

function Title({item}) {
    const { id } = useParams();   
    if(item.id===id){        
    return (  
        
            <div className="Title">                              
                <h1 >{item.title}</h1>                
            </div>   
    
   )
    
    }
}
export default Title