import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <div>
      <div className="update-container">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="content-container">
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="></img>
            <a>PREVIOUS WEEKS</a>
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
