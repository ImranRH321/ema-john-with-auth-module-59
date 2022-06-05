import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="form_container">
        <div>
          <h2 className="form_title">SignUP</h2>
          <form>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="" />
            </div>
            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
            </div>
            <div className="form_group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm-password" id="" />
            </div>
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