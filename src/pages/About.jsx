import React from 'react';
import { Link } from 'react-router-dom';
import Accordeon from "../components/Accordeon";
import DataAbout from '../data/DataAbout.json';
import HomeBanner from '../components/AboutBanner.jsx';


function About () {
  return (
    <div>     
      <HomeBanner/>
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