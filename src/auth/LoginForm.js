import React from "react";

function LoginForm() {
  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Hey there!</h3>

        <div className="card">
          <div className="form-container card-body shadow-lg p-3  bg-body rounded">
            <form>
              <div className="form-group">
                <label>Work Email </label>
                <input name="username" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <button className="btn btn-primary float-right mt-3">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
