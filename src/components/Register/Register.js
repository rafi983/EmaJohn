import React from "react";
import { Link } from "react-router-dom";
import google from "../../icons/googleicon.png";

const Register = () => {
  const handleGoogleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="form">
      <form>
        <h1 className="mb-4">Register your account</h1>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="name" className="form-control ms-5" id="name" />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            Mobile
          </label>
          <div className="col-sm-10">
            <input type="phone" className="form-control ms-5" id="phone" />
          </div>
        </div>

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

        <div className="row mb-3">
          <label htmlFor="retype-Password" className="col-sm-2 col-form-label">
            Retype Password
          </label>
          <div className="col-sm-10">
            <input
              type="retype-password"
              className="form-control ms-5"
              id="retype-Password"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-warning">
          Register
        </button>
      </form>

      <h2>OR Using</h2>
      <img src={google} className="icon" onClick={handleGoogleClick} alt="" />

      <p>Already have an account?</p>
      <Link to="/login">
        <button className="btn-regular">Log in</button>
      </Link>
    </div>
  );
};

export default Register;
