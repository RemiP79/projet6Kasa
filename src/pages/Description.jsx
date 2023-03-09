
import React from 'react';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';

function About() {
    const { id } = useParams();
    return (
     <div>
        <h2>Now showing post {id}</h2>
      <h2>Now showing post {DataJson.id}</h2>
     </div>
    );
   }
  

  export default About





