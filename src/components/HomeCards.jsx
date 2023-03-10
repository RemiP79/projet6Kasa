import React from "react";
import { Link } from 'react-router-dom';
import './styles/homeCards.css'



function HomeCards({card}) {    
    
    return (  
        <div className="cardsContent">       
        <Link to= {'description/' + card.id}> 
            
                <div className="cards">
                                <img src={card.cover} alt={card.title} className ="cardsImg"/>                        
                </div>  
                <p className="cardsTitle" >{card.title}</p> 
            
        </Link> 
        </div>
        
    )
}

export default HomeCards