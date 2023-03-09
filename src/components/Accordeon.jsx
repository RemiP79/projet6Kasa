import React from 'react';
import { useState, Image } from 'react';
import DataAbout from '../data/DataAbout.json';
import "./styles/accordeonAbout.css"
import FlecheOuverture from  '../assets/img/flecheOuvertureAccordeon.png';
import FlecheFermeture from  '../assets/img/flecheFermetureAccordeon.png';

function Accordeon() {
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
                {DataAbout.map((item, i)=> (
                    <div className="AccordeonItem">
                        <div className="AccordeonTitle" onClick={() => toggle(i)}>
                            <h2 key={'${item.id}-${item.index}'}>{item.title}</h2>
                            <span className="iconeAccordeon">{selected === i? '-' : '+'}</span>
                        </div>
                        <div className={selected === i? 'accordeonContent show' : 
                        'accordeonContent'} key={'${item.id}-${item.index}'}>{item.content}
                        </div> 
                    </div>                         
                ))}   
            </div>

        </div>       
    )
}
export default Accordeon