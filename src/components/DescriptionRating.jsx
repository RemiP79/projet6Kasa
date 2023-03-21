import React from "react";
import './styles/DescriptionRating.css';
import starFull from '../assets/img/starFull.png'
import starEmpty from '../assets/img/starEmpty.png'

function Rating({rating}) {
  return (
    <div className="divBlocRating">
        {rating==0 && <div className="divRating"><img src = {starEmpty} alt="etoile" className="Etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
        {rating==1 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
        {rating==2 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
        {rating==3 && <div className="divRating"><img src = {starFull} alt="etoile" className="Etoile"/><img src = {starFull} alt="etoile" className="Etoile"/><img src = {starFull} alt="etoile" className="Etoile"/><img src = {starEmpty} alt="etoile" className="Etoile"/><img src = {starEmpty} alt="etoile" className="Etoile"/></div>}
        {rating==4 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starEmpty} alt="etoile"/></div>}
        {rating==5 && <div className="divRating"><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/><img src = {starFull} alt="etoile"/></div>}
    </div>
  )
}
   
   
   
   
  

export default Rating