import React from 'react';
import { useState } from 'react';

import "./styles/accordeonAbout.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';

function Accordeon({item},i) {
    const [selected, setSelected]  = useState(null);
    const toggle = (i) => {
        if (selected ===i) {
            return setSelected(null);
        }
        setSelected(i)
    }
    return (
        <div className="wrapper">
            <div className="accordeon">                
                    <div className="AccordeonItem">
                        <div className="AccordeonTitle" onClick={() => toggle(i)}>
                            <p >{item.title}</p>
                            <span className="iconeAccordeon">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContent show' : 
                        'accordeonContent'}>{item.content}
                        </div> 
                    </div>                         
                 
            </div>

        </div>       
    )
}
export default Accordeon