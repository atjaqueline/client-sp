import "./Updates.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Updates = () => {
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
    <div>
      {updates.map((updates) => (
        <div className="updates-container">
          <p>Title:{updates.title}</p>
          <p>{updates.submited_by}</p>
          <p>{updates.description}</p>
          <p>Submited by: {updates.submited_by}</p>
          </div>
      ))}
    </div>
    </div>
  );
  
};

export default Updates;