import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import email from "../../icons/email.png";
import facebook from "../../icons/facebook.png";
import google from "../../icons/googleicon.png";
import password from "../../icons/password.png";
import yahoo from "../../icons/yahoo.png";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleClick = () => {
    signInUsingGoogle().then((result) => {
      console.log(result.user);
      history.push(redirect_uri);
    });
  };

  return (
    <div className="form">
      <form>
        <h1 className="mb-4">Please Login</h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            <img src={email} alt="" />
          </label>
          <div className="col-sm-11">
            <input
              type="email"
              placeholder="Your registered email.."
              className="form-control ms-5 userInputForm"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="inputPassword3" className="col-sm-1 col-form-label">
            <img src={password} alt="" />
          </label>
          <div className="col-sm-11">
            <input
              type="password"
              placeholder="password"
              className="form-control ms-5 userInputForm"
              id="inputPassword3"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-form2">
          Sign in
        </button>
      </form>

      <h2>OR Using</h2>
      <div className="d-flex my-4 ">
        <img src={google} onClick={handleGoogleClick} className="icon" alt="" />
        <img src={yahoo} className="icon ms-2" alt="" />
        <img src={facebook} className="icon ms-3" alt="" />
      </div>
      <p>New to ema-john?</p>
      <Link to="/register">
        <button className="btn-form">Create your account</button>
      </Link>
    </div>
  );
};

export default Login;
