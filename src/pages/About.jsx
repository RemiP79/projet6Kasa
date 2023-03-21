import React from 'react';
import Accordeon from "../components/Accordeon";
import DataAbout from '../data/DataAbout.json';
import HomeBanner from '../components/AboutBanner.jsx';
import "../components/styles/about.css"

function About () {
  return (
    <div>     
      <HomeBanner/>
      <div className="wrapper">
      <div className="accordeon">
      {DataAbout.map((props) =>(
        <Accordeon          
          key={props.id}
          props={props}
        />
      ))}
      </div>
      </div>
    </div>
  )
}

export default About