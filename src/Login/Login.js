import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Login</h2>
        <form>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="form_submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john? <Link to="/signup"> Create New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
