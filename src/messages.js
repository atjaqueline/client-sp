
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageById = () => {
  const [messageId, setMessageId] = useState([]);
  let { id } = useParams();

useEffect(() => {
const fetchMessage = async () => {
  const response = await axios.request(
    `http://localhost:8080/api/messages/${id}`);
  setMessageId(response);
}
fetchMessage();
}, []);

  return (
      <div>
        <p>{messageId.data}</p>
      </div>
  );
  }

export default MessageById;