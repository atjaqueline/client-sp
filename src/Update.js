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
            <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="></img>
          </div>
          <div className="text-container">
            <h2>Update N</h2>
            <div className="info-container">
              <h3>Title:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
              </p>
            </div>
            <div className="button-container btn-updates-container btn-mgn">
              <a href="/overview" className="btn btn-white">
                Back
              </a>
              <a className="btn btn-white">Skip</a>
              <a href="/details" className="btn btn-green">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
