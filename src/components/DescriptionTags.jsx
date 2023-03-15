import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import "./styles/DescriptionTags.css"

function Tags({item}) {
    const { id } = useParams();  
    
    if(item.id===id){ 
        
        let tableau=[];
        for(let tabl of item.tags){
            tableau.push(<div className="ligneTablTags">{tabl}</div>)
        }    
       
        return (        
            <tr className="tableauTags">{tableau}</tr>     
    
   )
        
    
    }
}
export default Tags