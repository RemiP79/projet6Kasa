import React from "react";
import './styles/DescriptionRating.css';
import starFull from '../assets/img/starFull.png'
import starEmpty from '../assets/img/starEmpty.png'

function Rating({props}) {
 return (
  <span >{props.rating>=props.number? 
    <img src = {starFull} alt="etoile" className="Etoile" />
    :
    <img src = {starEmpty} alt="etoile" className="Etoile" />} 
  </span>)
  
}

export default Rating