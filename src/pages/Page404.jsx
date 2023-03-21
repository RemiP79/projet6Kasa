import React from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/404.css"
import Img404 from "../assets/img/img404.png"

function Page404() {
    return (
        <div className="divPage404">
            <img src={Img404} alt="404" className="Img404"/>
            <p className="p404">Oups ! La page que vous demandez n'existe pas.</p>
            <p className="link404">
                <Link to= "/" className="navLink404">Retourner sur la page d'accueil</Link>    
            </p>
        </div>
    )
}

export default Page404