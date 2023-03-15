import React from 'react';
import { NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../components/styles/404.css"


function Page404() {
    return (
        <div>
        <h1 className="number404">404</h1>
        <p className="p404">Oups ! La page que vous demandez n'existe pas.</p>
        <p className="link404">
            <NavLink >            
                <Link to= "/" className="navLink404">Retourner sur la page d'accueil</Link>           
            
            </NavLink>
        </p>
        </div>
    )
}

export default Page404