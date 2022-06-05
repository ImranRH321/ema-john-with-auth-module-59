import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  //  email
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };
  //  password
  const handlePasswordBlur = event => {
    console.log(event.target.value, "password flied");
    setPassword(event.target.value);
  };
  // jodi user take taile shop a niya jay
  if (user) {
    navigate("/shop");
  }
  const handleUserSignIn = event => {
    // console.log(email, password, 'email, password');
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="text"
              name="email"
              id=""
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p>{error?.message}</p>
          <p>{loading && <span>Loading....</span>}</p>
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
