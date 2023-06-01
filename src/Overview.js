import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Overview = () => {
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
          </div>
          <div className="text-container">
            <h2>21 May - 27 May</h2>
            <div className="info-container">
              <ul>
                <li>1. lorem Ipsum is simply</li>
              </ul>
              <ul>
                <li>2. lorem dummy text of the </li>
              </ul>
              <ul>
                <li>3. lorem dummy</li>
              </ul>
            </div>
            <div className="button-container btn-updates-container btn-mgn">
              <a href="/" className="btn btn-white">
                Back
              </a>
              <a href="/update" className="btn btn-green">
                Ok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
