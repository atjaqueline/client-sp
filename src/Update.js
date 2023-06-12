import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Update = () => {
  return (
    <div>
      <div className="update-container">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="content-container">
          <div className="img-container">
            <img src="images/img-3.jpg"></img>
          </div>
          <div className="text-container">
            <h2>Update id</h2>
            <div className="info-container">
              <h3>Title:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
              </p><a href="/details" className="btn btn-green">
                Details
              </a>
            </div>
            <div className="button-container btn-updates-container btn-mgn">
              <a href="/overview" className="btn btn-white">
                Back
              </a>
              <a className="btn btn-white">Next Update</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
