import React from "react";
import DataJson from "../data/Data.json";
import { Link } from 'react-router-dom';



function HomeCards() {
    const id = "item.id";
    return (        
            <div className="cards">
                {DataJson.map((item)=> (
                    
                    <Link to="/description/{id}">
                    <div className="CardsImg" key= '${item}-${index}'>
                            <img src={item.pictures[0]} alt={item.title} key= 'img-${item}-${index}'/>                        
                            <p className="CardsTitle" key= 'title-${item}-${index}'>{item.title} </p> 
                    </div>
                    </Link>
                    
                                 
                ))}   
            </div>             
    )
}

export default HomeCards