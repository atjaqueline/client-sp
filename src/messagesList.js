import React, { useEffect, useState } from 'react';
import NewMessageForm from "./newMessageForm";
import "./messagesList.css"


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
    <div>
      <p>Messages</p>
    <ul>

      {messages.map(message => 
         <div>
           
         <li className="msg-container"> 
         <img src=""></img>
         <p>Title</p>
         <p>{message.messages}</p>
           <a href="/messages/${id}">see more</a> 
           </li>
         
         </div>
        )}
     
    </ul>
    <NewMessageForm/>
    </div>
  );
};

export default MessagesList;