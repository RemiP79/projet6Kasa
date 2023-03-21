import React from "react";
import './styles/slider.css';
import DataJson from '../data/Data.json';
import { useParams } from 'react-router-dom';
import "./styles/DescriptionTags.css"

function Tags({tag}) {        
        return (        
            <div className="tags">{tag.value}</div>
   )
}
export default Tags