import React from "react";

function SignupForm() {
  return (
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Sign Up</h2>
        <div className="card">
          <div className="card-body shadow-lg p-3  bg-body rounded">
            <form>
              <div className="form-group">
                <label>Username</label>
                <input name="username" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
