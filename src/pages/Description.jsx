
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
import Accordeon from "../components/Accordeon.jsx";
import AccordeonEquip from "../components/DescriptionAccordeonEquip.jsx";
import { Navigate } from 'react-router-dom';



function DescriptionPage({item}, index) {
    const { id } = useParams(); 
    
    const datajson = DataJson.find(location=>location.id===id);
    if(datajson===undefined){
      return <Navigate to="/*"/>
    }
    return (
    
<>
     <Slider  pictures={datajson.pictures} />
                             
                              
    

    
      <div className="blocTitle">
          <div className="title">
            <Title title={datajson.title}/>
            
         
          <div className="">
          <Location location={datajson.location}/>
              
            
          </div>            
          <div className="tagsDescription">                
            {datajson.tags.map((tag,index)=> {
              return <Tags value={tag} key={index}/>
            })}                       
            
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
              
                                  <Rating 
                                                         
                                    rating={datajson.rating}
                                          />                               
              
                  
        </div>
      </div>      
    </div>
    <div className="divAccordeon">
        <div className="DescriptionAccordeonDescription">
          <Accordeon key={index} item={{title:"Description", reply: datajson.description}}/>
        </div>

        <div className="EquipementAccordeonDescription">
          <Accordeon key={index} item={{title:"Equipements", reply: datajson.equipments}}/>
        </div>
    </div>

</>
    
    );
   }
  

  export default DescriptionPage





