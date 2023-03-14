
import React from 'react';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider.jsx'
import Title from '../components/DescriptionTitle.jsx'
import Location from '../components/DescriptionLocation.jsx'
import Tags from '../components/DescriptionTags.jsx'
import Host from '../components/DescriptionHost.jsx'
import Rating from '../components/DescriptionRating.jsx'
import '../components/styles/Description.css'
import AccordeonDescr from "../components/DescriptionAccordeonDescr.jsx";
import AccordeonEquip from "../components/DescriptionAccordeonEquip.jsx";



function DescriptionPage({item}) {
    const { id } = useParams();
    
    return (
     <div>
      <div>
          
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
    <div className="">
          
          {DataJson.map((item) => ( 
                              <Location 
                                key={item.id}                         
                                item={item}
                                      />
                          )
                        )}
    </div>
      
    <div className="">
          
          {DataJson.map((item) => ( 
                              <Tags 
                                key={item.id}                         
                                item={item}
                                      />
                          )
                        )}
    </div>
    <div className="">
          
          {DataJson.map((item) => ( 
                              <Host 
                                key={item.id}                         
                                item={item}
                                      />
                          )
                        )}
    </div>
        
    <div className="">
          
          {DataJson.map((item) => ( 
                              <Rating 
                                key={item.id}                         
                                item={item}
                                      />
                          )
                        )}
    </div>

    <div>
    

    {DataJson.map((item) =>(
    
        <AccordeonDescr 
          key={item.id}
          item={item}
        />
      ))}
    






    </div>

    <div>
    

    {DataJson.map((item) =>(
    
        <AccordeonEquip 
          key={item.id}
          item={item}
        />
      ))}
    






    </div>









      </div>
    
    );
   }
  

  export default DescriptionPage





