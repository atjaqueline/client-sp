import React from 'react';
import "./Home.css"

function MsgContainer() {
    return ( 

         <div>
            <div className="msg-container msg-content">
                <p>You have 2 new messages</p>
            <a href="/messages">See messages</a> 
            </div>
        </div>
     );
}

export default MsgContainer;