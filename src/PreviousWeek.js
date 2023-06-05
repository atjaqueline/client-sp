import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PreviousWeek = () => {
  return (
    <div>
      <div className="update-container">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="content-container">
         
          <div className="text-container">
            <h2></h2>
            <div className="info-container">
                 {/* map to overview and previous week data */}
              <ul>
                <li>Week:  </li>
              </ul>
            </div>
            <div className="button-container btn-updates-container btn-mgn">
            
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

export default PreviousWeek;