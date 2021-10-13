import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import email from '../../icons/email.png';
import facebook from '../../icons/facebook.png';
import google from '../../icons/googleicon.png';
import password from '../../icons/password.png';
import yahoo from '../../icons/yahoo.png';
import './Login.css';

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingYahoo,
    signInUsingFacebook,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleResetPassword,
    error,
    loginMsg,
    setVerificationMsg,
    setIsLoading,
    user,
    resetMsg,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || '/shop';

  const handleGoogleClick = () => {
    signInUsingGoogle()
      .then(result => {
        console.log(result.user);
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  const handleYahooClick = () => {
    signInUsingYahoo()
      .then(() => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  const handleFacebookClick = () => {
    signInUsingFacebook()
      .then(() => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  const handleVerifyMsg = () => {
    setVerificationMsg('');
  };

  return (
    <div className="form">
      {user.email && user.emailVerified && <h1>{loginMsg}</h1>}
      <h3 className="text-primary">{resetMsg}</h3>
      <form onSubmit={handleLogin}>
        <h1 className="mb-4">Please Login</h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
            <img src={email} alt="" />
          </label>
          <div className="col-sm-11">
            <input
              type="email"
              onBlur={handleEmailChange}
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
              onBlur={handlePasswordChange}
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

        <button className="btn btn-info ms-3" onClick={handleResetPassword}>
          Reset password
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
          onClick={handleFacebookClick}
          className="icon ms-3"
          alt=""
        />
      </div>
      <p>New to ema-john?</p>
      <Link to="/register">
        <button className="btn-form" onClick={handleVerifyMsg}>
          Create your account
        </button>
      </Link>
    </div>
  );
};

export default Login;
