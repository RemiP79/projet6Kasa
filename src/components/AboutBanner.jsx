import React from 'react';
import Image from "../assets/img/kalen-emsley.png";
import "./styles/aboutBanner.css";

function AboutBanner() {
    return (
        <div class="aboutBanner">
            <img src={Image} alt="Image A propos" />
        </div>
    )
}

export default AboutBanner