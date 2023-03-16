import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Before from '../assets/img/Before.png';
import Next from '../assets/img/Next.png';


function Slider({pictures}) {
     
    const [index, setIndex] = useState(0);
    function before() {
        if (index===0)  setIndex(pictures.length-1)
        else setIndex(index -1);
    }
    function next() {
        if (index===pictures.length-1) setIndex(0)
        else setIndex(index +1);
    }
       
    return (               
            <div className="slide">                             
                <div ><img src= {pictures[index]} alt={'Image ' + pictures.title}/></div>
                
                {pictures.length >1 &&
                <React.Fragment>
                <div className = "btn btn-prev" onClick={before}>< img src={Before} alt="Precédente" className = "arrowPrev" /></div>
                <div className = "btn btn-next" onClick={next}>< img src={Next} alt="Suivante" className = "arrowNext"/></div>
                   <p className="decompteImg">
                         {index+1} / {pictures.length}
                    </p>
                </React.Fragment>
                }
                
            
            </div>
       
    
   )    
        }

export default Slider