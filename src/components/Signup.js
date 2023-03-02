// import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from "./Firebase";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    pass: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, contact, pass } = user;

    const res = await fetch(
      "https://portfolio-crud-c89fd-default-rtdb.firebaseio.com/postDataFirebase.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:
         JSON.stringify({
          name,
          email,
          contact,
          pass,
        }),
      }
    );
  };

  return (
    <div className="div">
      <div className="container1">
        <form method="POST">
          <h1 className="h1Login">Sign Up</h1>
          <div className="name1">
            <label htmlFor="name" className="lab">
              Name
            </label>
            <input
              className="inputName"
              type="text"
              name="name"
              placeholder="Enter your email"
              value={user.name}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>

          <div className="email1">
            <label htmlFor="name" className="lab">
              Email
            </label>
            <input
              className="inputName"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>

          <div className="psw1">
            <label htmlFor="name" className="lab">
              Contact
            </label>
            <input
              className="inputName"
              type="text"
              name="contact"
              placeholder="Enter your password"
              value={user.contact}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>

          <div className="psw1">
            <label htmlFor="name" className="lab">
              Password
            </label>
            <input
              className="inputName"
              type="password"
              name="pass"
              placeholder="Enter your password"
              value={user.pass}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="btn1">
            <button className="btn" onClick={postData}>
              Sign-Up
            </button>
            <p>
              Already have an accout?{" "}
              <span>
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
