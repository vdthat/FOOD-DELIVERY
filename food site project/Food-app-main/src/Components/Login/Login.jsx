import React, { useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
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
      <div className="loginWrapper">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <h3></h3>
          <button type="submit">Login</button>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
