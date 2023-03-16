import React from 'react';
import Logo from '../assets/img/logoKasaRouge.png';
import "./styles/header.css";
import { NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';


function Banner() {
    return (<header id="header">
        <img id="logoKasaRouge" src={Logo} alt="Logo Kasa" />        
        
            <ul id="navUl">
                <Link to= "/"className="navLi">Accueil</Link>
                <Link to= "/about"className="navLi">A Propos</Link>
            </ul>
        

    </header>
    )
}
export default Banner