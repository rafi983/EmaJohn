import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import google from "../../icons/googleicon.png";

const Register = () => {
  const { auth, createUserWithEmailAndPassword, user } = useAuth();
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      setMsg("");
      return;
    }

    if (!/^(?=.*[a-z]).*$/.test(password)) {
      setError("Password must have at least one Lowercase Character.");
      setMsg("");
      return;
    }
    if (!/^(?=.*[0-9]).*$/.test(password)) {
      setError("Password must contain at least one Digit.");
      setMsg("");
      return;
    }
    if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
      setError("Password must contain at least one Special Symbol.");
      setMsg("");
      return;
    }
    if (!/^.{6,10}$/.test(password)) {
      setError("Password must be 6-10 Characters Long.");
      setMsg("");
      return;
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setError("Password must have at least one Uppercase Character.");
      setMsg("");
      return;
    }

    if (user.email) {
      setMsg("Registration successful, Please Login");
    }

    newUserRegister(email, password);
  };

  const newUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setMsg("");
      });
  };

  return (
    <div className="form ">
      <form onSubmit={handleRegistration}>
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
              onBlur={handleEmailChange}
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
              onBlur={handlePasswordChange}
              type="password"
              className="form-control ms-5"
              id="inputPassword3"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-warning">
          Register
        </button>
      </form>
      <h4 className="text-primary ms-5 mt-4">{msg}</h4>
      <h4 className="text-danger ms-5 mt-3">{error}</h4>

      <h2>OR Using</h2>
      <img src={google} className="icon" alt="" />

      <p>Already have an account?</p>
      <Link to="/login">
        <button className="btn-regular">Log in</button>
      </Link>
    </div>
  );
};

export default Register;
