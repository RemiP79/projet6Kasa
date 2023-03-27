import React from 'react';
import { useState } from 'react';
import "./styles/accordeonAbout.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';

function Accordeon({props}) {
    const [selected, setSelected]  = useState(false);
    const toggle = () => {
        setSelected(!selected)
    }    
    return (
        <div className="AccordeonItem">
            <div className="AccordeonTitle" onClick={() => toggle()}>
                <p >{props.title}</p>
                <span className="iconeAccordeon">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
            </div>
            <div className={selected? 'accordeonContent show' : 
            'accordeonContent'}>{props.content}
            </div> 
        </div>
    )
}
export default Accordeon