import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../components/HomeBanner";
import HomeCards from '../components/HomeCards';
import DataJson from "../data/Data.json";
import '../components/styles/home.css';


function Home () {
  return (
    <div>      
      <Banner/>
      <div className="divCardsContent">
        {DataJson.map((card) => (
                    <HomeCards                  
                          key={card.id}
                          card={card}
                      />
                  ))}
     </div>
    </div>
  )
}

export default Home