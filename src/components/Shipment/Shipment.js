import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
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
    //email
    const handleEmailBlur = event => {
      setEmail(event.target.value);
    };
    //address
    const handleAddressBlur = event => {
      setAddress(event.target.value);
    };
  

    //phone
    const handlePhoneBlur = event => {
      setPhone(event.target.value);
    };
  
    //form submit-----------------------form
    const handleCreateUser = event => {
      event.preventDefault();
    };
  console.log(name, email, address, phone);
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
                onBlur={handleEmailBlur}
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
              <label htmlFor="phone">Phone</label>
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