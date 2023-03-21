
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



function DescriptionPage({item}, index, props) {
    const { id } = useParams(); 
    
    const datajson = DataJson.find(location=>location.id===id);
    if(datajson===undefined){
      return <Navigate to="/*"/>
    }
    return (
<>
     <Slider  pictures={datajson.pictures} />
      <div className="blocTitleHost">
        <div className="blocTitle">
          <Title title={datajson.title}/>
          <Location location={datajson.location}/>
          <Tags tag={{value:datajson.tags.map((tag,index)=><div key={index} className="tag">{tag}</div>)}} />
        </div>
        <div className="blocHost">
          <Host props={{name:datajson.host.name, picture:datajson.host.picture}}/>
          <Rating rating={datajson.rating}/> 
        </div>    
      </div>  
    
    <div className="divAccordeon">
      <div className="DescriptionAccordeonDescription">
        <Accordeon key={index} props={{title:"Description", content:datajson.description}}/>
      </div>
      <div className="EquipementAccordeonDescription">
        <Accordeon props={{title:"Equipements", content:datajson.equipments.map((contenu,indexEquip)=> <li className="liAccordeon" key={indexEquip}>{contenu}</li>)}}/>
      </div>
    </div>
                                                                      
</>
    
    );
   }
  

  export default DescriptionPage





