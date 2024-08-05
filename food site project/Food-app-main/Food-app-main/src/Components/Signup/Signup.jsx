import React, { useState } from "react";
import "./Signup.css";
import Header from "../Header/Header";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      <Header />
      <div className="signupWrapper">
        <form className="signupForm" onSubmit={handleSubmit}>
          <h2>Create your account</h2>
          <div className="inputContainer">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              value={user.firstName}
              name="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              value={user.lastName}
              name="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              value={user.email}
              onChange={handleChange}
              name="email"
              id="email"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              value={user.password}
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              type="password"
              value={user.confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Create account</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signup;
