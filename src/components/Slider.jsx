import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Before from '../assets/img/Before.png';
import Next from '../assets/img/Next.png';


function Slider({item}) {
    const { id } = useParams();   
    const [index, setIndex] = useState(0);
    if(item.id===id){
       
    function before() {
        if (index===0){
            setIndex(item.pictures.length-1)
        }else
        setIndex(index -1);
    }
    function next() {
        if (index===item.pictures.length-1){
            setIndex(0);
        }else
        setIndex(index +1);
    }
       
    return (               
            <div className="slide">                             
                <div ><img src= {item.pictures[index]} alt={'Image ' + item.title}/></div>
                
                {item.pictures.length >1 &&
                <React.Fragment>
                <div class = "btn btn-prev" onClick={before}>< img src={Before} alt="Precédente" className = "arrowPrev" /></div>
                <div class = "btn btn-next" onClick={next}>< img src={Next} alt="Suivante" class = "arrowNext"/></div>
                   <p className="decompteImg">
                         {index+1} / {item.pictures.length}
                    </p>
                </React.Fragment>
                }
                
            
            </div>
       
    
   )    
        }
}
export default Slider