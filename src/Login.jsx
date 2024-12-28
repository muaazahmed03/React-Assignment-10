import React from 'react';
import './Login.css'; 
import './SignUp.jsx'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <p>
          Don't have an account? <a href="/signup.jsx">Sign up here</a>
        </p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button className="submit-btn">Login</button>
      </div>

      <div className="login-image">
        <img src="https://dreamplanetmedia.com/dist/image/login2.png" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
