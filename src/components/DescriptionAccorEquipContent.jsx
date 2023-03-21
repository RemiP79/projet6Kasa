import React from "react"

import DataJson from '../data/Data.json';




function equip({item}) {
   
     
        return (
            <ul>
                {DataJson.map((equipment) => (
    <li key={`${equipment}`}>{ equipment }</li>))}
            </ul>
        )
                }
            




    