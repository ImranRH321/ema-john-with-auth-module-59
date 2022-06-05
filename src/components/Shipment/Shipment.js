import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const Shipment = () => {
  const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    // const navigate = useNavigate();
   
    //name
    const handleNameBlur = event => {
      setName(event.target.value);
    };

    //address
    const handleAddressBlur = event => {
      setAddress(event.target.value);
    };
  

    //phone number
    const handlePhoneBlur = event => {
      setPhone(event.target.value);
    };
  
    //form submit-----------------------form
    const handleCreateUser = event => {
      event.preventDefault();
      const shippng = {name, email, phone, address}
      console.log(shippng);
    };

    /* new line stat beak the stop for now ready and go .. .. */
    return (
      <div className="form_container">
        <div>
          <h2 className="form_title">add Shipping</h2>
          <form onSubmit={handleCreateUser}>
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input
                onBlur={handleNameBlur}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
               value={user?.email} readOnly
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddressBlur}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="phone">Phone Number</label>
              <input
                onBlur={handlePhoneBlur}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form_submit" type="submit" value="SignUp" />
          </form>
        </div>
      </div>
    );
  };

export default Shipment;