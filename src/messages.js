
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

const MessageById = () => {
  const [messageId, setMessageId] = useState([]);

  let { id } = useParams();

  useEffect(() => {


    async function getJSONData() {
      const response = await fetch(`http://localhost:8080/api/messages/${id}`);
      const jsonData = await response.json();
      setMessageId(jsonData);
      console.log(jsonData);
    }
getJSONData();
}, []);

  return (
      <div>
        {messageId.map((message) => 
        <p>{message}</p>
        
        )};

    
      </div>
  )
};

export default MessageById;