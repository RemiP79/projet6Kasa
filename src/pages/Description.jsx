
import React from 'react';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider.jsx'
import '../components/styles/Description.css'


function About() {
    const { id } = useParams();
    
    
    return (
     <div>
      <div>
          <h2>Now showing post {id}</h2>
          <h2>Now showing post {}</h2>
        </div>
        
          <div id="carousel">         
           
                {DataJson.map((item) => (                        
                        
                        <Slider 
                          key={item.id}                         
                          item={item}
                                />
                    )
                   )}
          </div>
          <div >
          <h2 className="marginTop">Now showing post {id}</h2>
          <h2>Now showing post {DataJson.id}</h2>
        </div>
        

        
      </div>
    
    );
   }
  

  export default About





