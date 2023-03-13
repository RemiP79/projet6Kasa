
import React from 'react';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider.jsx'
import Title from '../components/DescriptionTitle.jsx'
import '../components/styles/Description.css'


function DescriptionPage({item}) {
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
    
    <div className="marginTop">
          
          {DataJson.map((item) => ( 
                              <Title 
                                key={item.id}                         
                                item={item}
                                      />
                          )
                        )}
    </div>

      
        

        
      </div>
    
    );
   }
  

  export default DescriptionPage





