import React from "react";

const NewMessageForm = () => {
  return (
    <div className="msg-form">
      {" "}
      <form className="msg-form">
        <input name="newmessage" type="text" placeholder="add a new message" />

        <button className="btn btn-light sub-btn">Submit</button>
      </form>
    </div>
  );
};

export default NewMessageForm;
