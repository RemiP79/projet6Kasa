import React from "react";
import './styles/DescriptionRating.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import starFull from '../assets/img/starFull.png'
import starEmpty from '../assets/img/starEmpty.png'

function Rating({item}) {
    const { id } = useParams();
    
    if(item.id===id){        
        
            

        return (
<div className="divBlocRating">
    {item.rating==0 && <div className="divRating"><img src = {starEmpty} alt="etoile" className="Etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
    {item.rating==1 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
    {item.rating==2 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
    {item.rating==3 && <div className="divRating"><img src = {starFull} alt="etoile" className="Etoile"/><img src = {starFull} alt="etoile" className="Etoile"/><img src = {starFull} alt="etoile" className="Etoile"/><img src = {starEmpty} alt="etoile" className="Etoile"/><img src = {starEmpty} alt="etoile" className="Etoile"/></div>}
    {item.rating==4 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
    {item.rating==5 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/></div>}
          </div>
        )
      }
   
   
   
   
   
}
export default Rating