import React from 'react';
import './SignUp.css'; 
import './Login.jsx'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p>
          Already have an account? <a href="./Login.jsx">Login here</a>
        </p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <div className="terms">
          <input type="checkbox" id="terms" />
          <label>
            By signing up, you agree to receive updates and special offers.
          </label>
        </div>

        <button className="submit-btn">Submit</button>
      </div>

      <div className="signup-image">
        <img src="https://dreamplanetmedia.com/dist/image/login2.png" alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default SignUp;
