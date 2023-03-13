import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';

function Slider({item}) {
    const { id } = useParams();   
    if(item.id===id){
        for(let i in DataJson){
    return (       
        
            <div className="slide">                              
                <div ><img src= {item.pictures[i]} alt={'Image ' + item.title}/></div>
                < span class = "btn btn-prev" onClick={item.pictures[-1]} > - </ span >
                < span class = "btn btn-next" onClick={item.pictures[+1]} > + </ span >
            </div>
       
    
   )    
    }
    }
}
export default Slider