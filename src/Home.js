import React from "react";
import HomeCard from "./components/home-card";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <div className="main-container update bgdark text-white main-home">
      <div className="hub-container">
        <div className="main-title">
          <h2>
            <b>TEAM</b>
          </h2>
          <h1>
            <b>HUB</b>
          </h1>
        </div>
        <a href="/updates"><HomeCard title="updates"/> </a>
       
</div>
      <div className="box-container">
        <a href="/updates"><HomeCard title="Team Events" /> </a>
        <HomeCard title="Health" />
        <HomeCard title="Calendar" />
        <HomeCard title="Efficiency Report" />
        <HomeCard title="Team lunch" />
        <HomeCard title="Meeting notes" />
        <HomeCard title="Side Projects" />
      </div>
    </div>
  );
};

export default Home;
