import React from "react";
import HomeCard from "./components/home-card";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <div className="update-container update bgdark text-white main-home">
      <div className="menu-container">
      <h1>Team Hub</h1>

 
        <HomeCard title="Updates" />
        </div>
       
        <HomeCard title="Team Events" />
        <HomeCard title="Health" />
        <HomeCard title="Updates" />
        <HomeCard title="Team Events" />
        <HomeCard title="Health" />
        <HomeCard title="Updates" />
        <HomeCard title="Team Events" />
        <HomeCard title="Health" />
  </div>
    
  );
};

export default Home;
