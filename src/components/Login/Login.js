import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import google from "../../icons/googleicon.png";
import "./Login.css";

const Login = () => {
  const { handleGoogleClick } = useAuth();

  return (
    <div className="form">
      <form>
        <h1 className="mb-4">Please Login</h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control ms-5"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control ms-5"
              id="inputPassword3"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-warning">
          Sign in
        </button>
      </form>

      <h2>OR Using</h2>
      <img src={google} className="icon" onClick={handleGoogleClick} alt="" />

      <p>New to ema-john?</p>
      <Link to="/register">
        <button className="btn-regular">Create your account</button>
      </Link>
    </div>
  );
};

export default Login;
