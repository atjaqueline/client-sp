import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:8080/api/updates/102";

const Update = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if(!post) return null;

  return (
    <div>
      <div className="update-container update">
        <div className="header">
          <p>COMPANY Updates</p>
          <p>LATAMEA VERIFICATION</p>
        </div>
        <div className="content-container">
          <div className="img-container">
            <img src="images/img-3.jpg"></img>
          </div>
          <div className="text-container">
            <h2>Update {post.id}</h2>
            <div className="info-container">
              <h3>{post.title}</h3>
              <p>
               {post.description}
              </p>
              <a href="/details" className="btn btn-green">
                Details
              </a>
            </div>
            <div className="button-container btn-updates-container btn-mgn">
              <a href="/overview" className="btn btn-white">
                Back
              </a>
              <a className="btn btn-white">Next Update</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
