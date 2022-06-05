import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =  useCreateUserWithEmailAndPassword(auth)

 
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

  //form submit-----------------------form
  const handleCreateUser = event => {

    event.preventDefault()
    console.log(email , password);
    if(password !== confirmPassword){
      setError('password did not match')
    }
    if(password.length < 6){
      setError('password minimum 6 character ')
    }
    
    createUserWithEmailAndPassword(email, password)
    
  };

  console.log(user, 'user');
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
