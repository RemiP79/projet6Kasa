import React from 'react';
import { Link } from 'react-router-dom';
import Accordeon from "../components/Accordeon";
import DataAbout from '../data/DataAbout.json';


function About () {
  return (
    <div>
      <h1>Titre About</h1>
      <Link to="/">Retour à l'accueil</Link>
      {DataAbout.map((item) =>(
        <Accordeon 
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default About