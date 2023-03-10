import React from "react";
import './styles/slide.css';




function Slider({item}) {
   
    return (             
            
            <div className="slide">
                              
                <div ><img src={item.pictures} alt={'Image ' + item.title}/></div>
                < span class = "btn btn-prev" onClick={item[-1]} > - </ span >
                < span class = "btn btn-next" onClick={item[+1]} > + </ span >
            </div>
            
    
   )

}
export default Slider