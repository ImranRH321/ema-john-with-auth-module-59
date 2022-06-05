import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  //email
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };
  //password
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };

  //secreet
  const handleConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  };

  //form submit
  const handleCreateUser = event => {
    event.preventDefault();
    // console.log(email , 'email', password, 'password', confirmPassword);

    if (password !== confirmPassword) {
      setError("Your two password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password length minimum 6 letter");
    }
    //   // user create
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">SignUP</h2>
        <form onSubmit={handleCreateUser}>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
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
          <div className="form_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form_submit" type="submit" value="SignUp" />
        </form>
        <p>
          Al ready have Account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
