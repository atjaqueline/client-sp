import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";


  const baseURL = "http://localhost:8080/api/updates/102";

const UpdateDetails = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
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
              <div className="details-container">
                <h2>{post.affected_team}</h2>
                <div className="info-container">
                  <p>
                   {post.optional_details}
                  </p>
                </div>
                <a href="/update" className="btn btn-white">
                  Go Back
                </a>
              </div>
            </div>
           
          </div>
    </div>
  );
}

export default UpdateDetails;
