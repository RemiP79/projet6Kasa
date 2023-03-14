import React from 'react';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import "./styles/accordeonAbout.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';


function Accordeon({item},i) {
   
    const { id } = useParams(); 
    const [selected, setSelected]  = useState(null);
    if(item.id===id){   
    
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
                            <p >Description</p>
                            <span className="iconeAccordeon">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContent show' : 
                        'accordeonContent'}>{item.description}
                        </div> 
                    </div>                         
                 
            </div>

        </div>       
    )
    }
}
export default Accordeon