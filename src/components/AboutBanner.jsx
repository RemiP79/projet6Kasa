import React from 'react';
import Image from "../assets/img/kalen-emsley.png";
import "./styles/aboutBanner.css";

function AboutBanner() {
    return (
        <div className="aboutBanner">
            <img src={Image} alt="A propos" />
        </div>
    )
}

export default AboutBanner