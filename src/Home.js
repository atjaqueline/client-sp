import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <div>
      <div className="update-container">
        <div className="header-container"><p>SODEX Updates</p>
        </div>
        <div className="img-container">
          <img></img>
          <a>PREVIOUS WEEK</a>
        </div>

        <div className="button-container">
          <p>Are you ready?</p>
          <button>Let's go!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
