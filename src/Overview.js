import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";

 const baseURL = "http://localhost:8080/api/updates";
  
 const Overview = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post);
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
            <img src="images/img-2.jpg"></img>
          </div>
          <div className="text-container">
            <h2>21 May - 27 May</h2>
            <div className="info-container">
              {/* {post.map(post => (
                 <ul>
                <li> {post.id} - {post.title}</li>
              </ul>
              ))} */}
            
            </div>
            <div className="button-container btn-updates-container btn-mgn">
              <a href="/" className="btn btn-white">
                Back
              </a>
              <a href="/update" className="btn btn-green">
                Ok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
