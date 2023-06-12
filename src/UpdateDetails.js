import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateDetails = () => {
  return (
    <div>
      <div className="update-container">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="content-container">
          <div className="details-container">
            <h2>Team: affected_team</h2>
            <div className="info-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
              </p>
            </div>
            <div className="button-container btn-updates-container btn-mgn">
              <a href="/update" className="btn btn-white">
                Go Back
              </a>
            </div>
          </div>
        </div>
        {/* add form input */}
        <lable for="comments"></lable>
        <input
          type="text"
          id="comments"
          name="comments"
          className="comments"
        ></input>
      </div>
    </div>
  );
};

export default UpdateDetails;
