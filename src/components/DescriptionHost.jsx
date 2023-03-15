import React from "react";
import './styles/DescriptionHost.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';


function Tags({item}) {
    const { id } = useParams();   
    if(item.id===id){        
    return (  
        
            <div className="host">                              
                <div className="hostName">{item.host.name}</div> 
                <div className="divHostImg"><img src = {item.host.picture} alt = {item.host.name} className="hostImg"/> </div>               
            </div>   
    
   )
    
    }
}
export default Tags