import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import email from '../../icons/email.png';
import facebook from '../../icons/facebook.png';
import google from '../../icons/googleicon.png';
import password from '../../icons/password.png';
import userPic from '../../icons/user.png';
import yahoo from '../../icons/yahoo.png';
import './Register.css';

const Register = () => {
  const {
    handleRegister,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    error,
    user,
    signInUsingGoogle,
    signInUsingYahoo,
    signInUsingFacebook,
    verificationMsg,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || '/shop';

  const handleGoogleClick = () => {
    signInUsingGoogle().then(() => {
      history.push(redirect_uri);
    });
  };

  const handleYahooClick = () => {
    signInUsingYahoo().then(() => {
      history.push(redirect_uri);
    });
  };

  const handleFacebookClick = () => {
    signInUsingFacebook().then(() => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="form">
      <h3>{verificationMsg}</h3>
      <form onSubmit={handleRegister}>
        <h1 className="mb-4">Register your account</h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="name" className="col-sm-1 col-form-label">
            <img src={userPic} alt="" />
          </label>
          <div className="col-sm-11">
            <input
              type="name"
              onBlur={handleNameChange}
              placeholder="Your Name..."
              className="form-control ms-5 userInputForm"
              id="name"
              required
            />
          </div>
        </div>

        <div className="row mb-3  d-flex  align-items-center">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label ">
            <img src={email} alt="" />
          </label>
          <div className="col-sm-11">
            <input
              type="email"
              onBlur={handleEmailChange}
              placeholder="Enter your email"
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
              onBlur={handlePasswordChange}
              placeholder="password"
              className="form-control ms-5 userInputForm"
              id="inputPassword3"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-form2">
          Register
        </button>
        <br />
        {error}
      </form>

      <h2>OR Using</h2>
      <div className="d-flex my-4 ">
        <img src={google} onClick={handleGoogleClick} className="icon" alt="" />
        <img
          src={yahoo}
          className="icon ms-2"
          onClick={handleYahooClick}
          alt=""
        />
        <img
          src={facebook}
          className="icon ms-3"
          onClick={handleFacebookClick}
          alt=""
        />
      </div>

      <p>Already have an account?</p>
      <Link to="/login">
        <button className="btn-form">Log in</button>
      </Link>
    </div>
  );
};

export default Register;
