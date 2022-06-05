import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
  //email
    const handleEmailBlur = event => {
        setEmail(event)
    } 
  //password
    const handlePasswordBlur = event => {
        setEmail(event)
    } 
  //email
    const handleConfirmPasswordBlur = event => {
        setPassword(event)
    } 
  //email
    const handleCreateUser = event => {
        if(password !== confirmPassword){
            setError('Your two password did not match')
            return
        }
        event.preventDefault();
    } 

    return (
        <div className="form_container">
        <div>
          <h2 className="form_title">SignUP</h2>
          <form onSubmit={handleConfirmPasswordBlur}>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="text" name="email" id="" />
            </div>
            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
            </div>
            <div className="form_group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
            </div>
            <p style={{color:'red'}}>{error}</p>
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