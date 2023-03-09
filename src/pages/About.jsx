import React from 'react';
import { Link } from 'react-router-dom';
import Accordeon from "../components/Accordeon";



function About () {
  return (
    <div>
      <h1>Titre About</h1>
      <Link to="/">Retour à l'accueil</Link>
      <Accordeon />
    </div>
  )
}

export default About