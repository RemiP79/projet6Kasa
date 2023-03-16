import React from 'react';
import { useState } from 'react';

import "./styles/accordeonAbout.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';

function Accordeon({item}) {
    const [selected, setSelected]  = useState(false);
    const toggle = () => {
        setSelected(!selected)
    }
    
        return (
        <div className="wrapper">
            <div className="accordeon">
                {item.title!=`Description` && item.title!='Equipements'&&                                             
                    <div className="AccordeonItem">
                        <div className="AccordeonTitle" onClick={() => toggle()}>
                            <p >{item.title}</p>
                            <span className="iconeAccordeon">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContent show' : 
                        'accordeonContent'}>{item.content}
                        </div> 
                    </div>                    
                }
                {item.title=`Description`&&
                    <div className="AccordeonItem">
                        <div className="AccordeonTitle" onClick={() => toggle()}>
                            <p>{item.title}</p>
                            <span className="iconeAccordeon">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContent show' : 
                        'accordeonContent'}>{item.description}
                        </div> 
                    </div>
                }
                {item.title=`Equipements`&& 
                    <div className="AccordeonItem">
                        <div className="AccordeonTitle" onClick={() => toggle()}>
                            <p >{item.title}</p>
                            <span className="iconeAccordeon">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContent show' : 
                        'accordeonContent'}>{item.equipments}
                        </div> 
                    </div>
                }
            </div>
        </div>
        )
}
export default Accordeon