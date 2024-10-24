import React, { useState } from "react";
import './SignUpPage.css'
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) {
      setError("Please fill in all fields");
    } else {
      setError("");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
    }
  };
  return (
    <div>
      <div className="login-container">
        <img src="loginpage\src\images\signup.png" alt="SignUp Image" />
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <a>Sign up Kriad</a>
          </div>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
            />
          </div>

          <button type="submit" className="login-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
