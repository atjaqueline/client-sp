import React, { useEffect, useState } from 'react';
import NewMessageForm from "./newMessageForm";
import "./messagesList.css"
import { Link } from 'react-router-dom';


const MessagesList = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {


    async function getJSONData() {
      const response = await fetch("http://localhost:8080/api/messages");
      const jsonData = await response.json();
      setMessages(jsonData);
      console.log(jsonData);
    }
getJSONData();
}, []);



  return (
    <div className="msg-container">
      <p>Messages</p>
      <NewMessageForm/>
    <ul>

      {messages.map((message) => 
         <div key={message.id}>
           
         <li className="msg-container"> 
         <img src=""></img>
         <p>Title</p>
         <p>{message.messages}</p>
           <Link to={`/messages/${message.id}`}>see more</Link> 
           </li>
         
         </div>
        )}
     
    </ul>
    
    </div>
  );
};

export default MessagesList;