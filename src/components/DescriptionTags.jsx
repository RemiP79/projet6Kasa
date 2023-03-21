import React from "react";
import './styles/slider.css';
import "./styles/DescriptionTags.css"

function Tags({tag}) {        
    return (        
        <div className="tags">{tag.value}</div>
    )
}
export default Tags