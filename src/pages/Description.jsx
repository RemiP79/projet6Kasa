
import React from 'react';
import DataJson from '../data/Data.json';
import { useParams,Navigate } from 'react-router-dom';
import Slider from '../components/Slider.jsx'
import Title from '../components/DescriptionTitle.jsx'
import Location from '../components/DescriptionLocation.jsx'
import Tags from '../components/DescriptionTags.jsx'
import Host from '../components/DescriptionHost.jsx'
import Rating from '../components/DescriptionRating.jsx'
import Accordeon from "../components/Accordeon.jsx"
import '../components/styles/Description.css'


function DescriptionPage() {
  const { id } = useParams();   
  const TablRat=[1,2,3,4,5];  
  const datajson = DataJson.find(location=>location.id===id);
  if(datajson===undefined){
    return <Navigate to="/*"/>
  }

  return (
  <>
    <Slider  pictures={datajson.pictures}/>
    <div className="blocTitleHost">
      <div className="blocTitle">
        <Title title={datajson.title}/>
        <Location location={datajson.location}/>
        <Tags tag={{value:datajson.tags.map((tag,index)=>
                                            <div key={index} className="tag">
                                                {tag}
                                            </div>)}} />
      </div>
      <div className="blocHost">
        <Host props={{name:datajson.host.name, picture:datajson.host.picture}}/>
        <div className="divBlocRating">
          {TablRat.map((rating,index)=>
            <Rating props={{rating:datajson.rating, number:rating}}
              key={index}
              rating={rating} />)}
        </div>
      
      </div>    
    </div>      
    <div className="divAccordeon">
      <div className="DescriptionAccordeonDescription">
        <Accordeon props={{title:"Description", content:datajson.description}}/>
      </div>
      <div className="EquipementAccordeonDescription">
        <Accordeon props={{title:"Equipements", content:datajson.equipments.map((contenu,indexEquip)=> <li className="liAccordeon" key={indexEquip}>{contenu}</li>)}}/>
      </div>
    </div>                                                                      
  </>  
  );
}
  export default DescriptionPage





