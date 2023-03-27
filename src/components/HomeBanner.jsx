import React from 'react';
import Image from "../assets/img/imgHomeBanner.png";
import "./styles/homeBanner.css";

function HomeBanner() {
    return (
        <div className="homeBanner" >
            <img src={Image} alt="accueil" />            
            <p className = "pHomeBanner">Chez vous, partout et ailleurs</p>
            
        </div>
    )
}

export default HomeBanner