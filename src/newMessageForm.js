import React from "react";

const NewMessageForm = () => {
  return (
    <div>
      {" "}
      <form>
        <lable>add new message</lable>
        <input type="text"></input>
        <button className="btn btn-light sub-btn">Submit</button>
      </form>
    </div>
  );
};

export default NewMessageForm;
