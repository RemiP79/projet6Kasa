import React from "react";
import "./styles/DescriptionTags.css"

function Tags({tag}) {        
    return (        
        <div className="tags">{tag.value}</div>
    )
}
export default Tags