import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PreviousWeek = () => {
  return (
    <div>
      <div className="update-container update">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="previous-container">
          <ul>
            {/* to do: send get request to api (springboot)(query last 7 complete days updates) and map to link <li> ->> Date - Tittle +++ hrefs to /update/id */}
            <li>
              <a href="">01/03/2023 - IDWL rejection reason changes</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreviousWeek;
