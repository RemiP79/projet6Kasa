import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../components/HomeBanner";
import HomeCards from '../components/HomeCards';

function Home () {
  return (
    <div>      
      <Banner/>
      <h1>Titre Home</h1>
      <Link to="/about">Voir à propos</Link>
      <Link to = "/description">Page Description</Link>
      <HomeCards/>
    </div>
  )
}

export default Home