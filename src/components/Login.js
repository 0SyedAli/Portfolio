import React from "react";
// import styles from "./logi.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="div">
    <div className="container1">
      <h1 className="h1Login">Login</h1>

      <div className="email1">
        <label htmlFor="name" className="lab">
          Email
        </label>
        <input type="text" name="email" placeholder="Enter your email" />
      </div>

      <div className="psw1">
        <label htmlFor="name" className="lab">
          Password
        </label>
        <input type="text" name="psw" placeholder="Enter your password" required/>
      </div>
      <div className="btn1">
      <button className="btn">Sign-Up</button>
          <p>
          Already have an accout? {" "}
          <span><Link to="/Signup">Sign Up</Link></span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
