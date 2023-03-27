import React from "react";
import { Link } from 'react-router-dom';
import './styles/homeCards.css'



function HomeCards({card}) {    
    
    return (  
        <div className="cardsContent">       
            <Link to= {`description/${card.id}`}>                 
                <img src={card.cover} alt={card.title} className ="cardsImg"/>
                <p className="cardsTitle" >{card.title}</p> 
            </Link> 
        </div>        
    )
}

export default HomeCards