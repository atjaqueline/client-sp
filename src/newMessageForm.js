import React from "react";

const NewMessageForm = () => {
  return (
    <div>
      {" "}
      <form>
        <label>
          add new message
          <input name="newmessage" type="text" />
        </label>
        <button className="btn btn-light sub-btn">Submit</button>
      </form>
    </div>
  );
};

export default NewMessageForm;
