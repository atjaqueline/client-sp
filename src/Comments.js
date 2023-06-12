import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

// To do: axios POST and GET requests
// POST REQUEST -> comment body + update id + user id  
// GET REQUEST -> Get comments by update ID 

const Comments = () => {
  return (
    <div>
      <div className="comment">
          <p>Comments go here</p>
        {/* <ul>
          <li id="">
            <div className="comment-id">
              <p>Joao:</p>
              <p>Any updates on the other team?</p>
            </div>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Comments;
