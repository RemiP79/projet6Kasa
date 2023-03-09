import React from 'react';
import Image from "../assets/img/imgHomeBanner.png";

function HomeBanner() {
    return (
        <div>
            <img src={Image} alt="Image accueil" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default HomeBanner