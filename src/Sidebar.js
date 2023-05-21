import React from "react";

function Sidebar() {
  return (
    <div>
      <div>
        <div className="profile-container sidebar">
          <img
            src="https://i.pcmag.com/imagery/articles/049t9YtkWr14Pwhz8gGNptI-1.fit_lim.size_1536x.png"
            className="img-profile"
          ></img>
          <p>Name</p>
          <a>Profile</a>
          <a>Friends</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
