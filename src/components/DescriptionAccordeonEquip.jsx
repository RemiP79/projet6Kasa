import React from 'react';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import "./styles/accordeonDescription.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';
import DescriptionAccorEquipContent from "./DescriptionAccorEquipContent.jsx"

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
    
    
    let tableauEquipement=[];
        for(let tabl of item.equipments){
            tableauEquipement.push(<div className="tableauEquipement">{tabl}</div>)
        }    
       
        
        
    
        
    return (
        <div className="wrapperDescription">
                           
                    <div className="AccordeonItemDescription">
                        <div className="AccordeonTitleDescription" onClick={() => toggle(i)}>
                            <p >Equipements</p>
                            <span className="iconeAccordeonDescription">{selected? <img src={FlecheFermeture} alt="Fermer"/> : <img src={FlecheOuverture} alt="Ouvrir"/>}</span>
                        </div>
                        <div className={selected? 'accordeonContentDescription showDescription' : 
                        'accordeonContentDescription'}> {tableauEquipement}
                        </div> 
                    </div>                         
                 
           

        </div>       
    )
    }
}
export default Accordeon