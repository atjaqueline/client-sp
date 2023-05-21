import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MsgContainer = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const getUpdates = async () => {
      const response = await axios.request(`http://localhost:8080/api/updates`);
      setUpdates(response.data);
    };
    getUpdates();
  }, []);

  return (
    <div>
      {updates.map((updates) => (
        <div>
          <p>Title:{updates.title}</p>
          <p>{updates.description}</p>
          <p>Submited by: {updates.submited_by}</p>
          {/* <div className="msg-container msg-content">
        <p>You have 2 new messages</p>
        <a href="/messages">See messages</a>
        </div> */}
        </div>
      ))}
    </div>
  );
};

export default MsgContainer;
