import React from 'react';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import "./styles/accordeonDescription.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';


function Accordeon(props) {
   
    
    const [selected, setSelected]  = useState(false);
    const toggle = () => {
        setSelected(!selected)
    }
    

        
    return (
        <div className="wrapperDescription alignLeft">
                            
                    <div className="AccordeonItemDescription">
                        <div className="AccordeonTitleDescription" onClick={() => toggle()}>
                            <p >Description</p>
                            <span className="iconeAccordeonDescription">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContentDescription showDescription' : 
                        'accordeonContentDescription'}>{props.description}
                        </div> 
                    </div>                         
                 
            

        </div>       
    )
    }

export default Accordeon