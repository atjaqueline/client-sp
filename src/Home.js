import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";



const Home = () => {
  return (
    <div>
      <div className="update-container update">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="content-container">
          <div className="img-container">
            <img src="images/img.jpg" />
            <a href="/previous">PREVIOUS WEEKS</a>
          </div>
          <div className="text-container">
            <div className="info-container">
              <h3>Welcome to weekly updates!</h3>
              <p>
                Here you can find the most important updates from the current
                week
              </p>
            </div>
            <div className="button-container">
              <p>Are you ready?</p>
              <a href="/overview" className="btn btn-green">
                Let's go!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
