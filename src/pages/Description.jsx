
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
    <div id="carousel">
              {DataJson.map((item) => ( 
                      <Slider 
                        key={item.id}                         
                        item={item}
                              />
                  )
                  )}             
    </div>

    <div className="blocTitleHost"> 
      <div className="blocTitle">
          <div className="title">
            {DataJson.map((item) => ( 
                                    <Title 
                                      key={item.id}                         
                                      item={item}
                                            />
            ))
            }
          </div>
          <div className="">
            {DataJson.map((item) => ( 
                                    <Location 
                                      key={item.id}                         
                                      item={item}
                                            />
              ))
            }
          </div>            
          <div className="tagsDescription">                
            {DataJson.map((item) => ( 
                                    <Tags 
                                      key={item.id}                         
                                      item={item}
                                            />
              ))
            }
          </div>
      </div>
      <div className="blocHost">
        <div className="blocHostHost">              
              {DataJson.map((item) => ( 
                                  <Host 
                                    key={item.id}                         
                                    item={item}
                                          />
                ))
              }
        </div>            
        <div className="blocHostRating">              
              {DataJson.map((item) => ( 
                                  <Rating 
                                    key={item.id}                         
                                    item={item}
                                          />                               
                ))
              }
                  
        </div>
      </div>      
    </div>
    <div className="divAccordeon">
        <div className="DescriptionAccordeonDescription">
          {DataJson.map((item) =>(    
                    <AccordeonDescr 
                      key={item.id}
                      item={item}
                    />
            ))}    
        </div>
        <div className="EquipementAccordeonDescription">
          {DataJson.map((item) =>(
          
              <AccordeonEquip 
                key={item.id}
                item={item}
              />
            ))}    
        </div>
    </div>

</div>
    
    );
   }
  

  export default DescriptionPage





