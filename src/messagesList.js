import React from "react";
import NewMessageForm from "./newMessageForm";



const MessagesList = () => {
  return (
    <div>
      <p>All messages here</p>
    <ul>
      <div>
        <li>id 1 message
          <a href="/messages/${id}">see more</a> 
          </li>
        
        </div>
    </ul>
    <NewMessageForm/>
    </div>
  );
};

export default MessagesList;