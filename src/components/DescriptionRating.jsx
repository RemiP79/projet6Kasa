import React from "react";
import './styles/DescriptionRating.css';

function Rating({rating}) {
 return (
    <div className="divBlocRating">
        {rating.value}
    </div>
  )
}

export default Rating