import React from 'react'
import './login.css'

import { FaBookOpen } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          {/* Left Side: Login Form */}
          <div className="login-form">
            <FaBookOpen
              color="white"
              style={{
                fontSize: "25px",
                marginTop: "-5px",
                marginRight: "5px",
              }}
            />
            <span className="login-font_book">BookWise</span>
            <p className="mt-3">Welcome Back to the BookWise</p>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-light w-100 mt-2">
                Login
              </button>
              <p className="text-center mt-3">
                Don’t have an account? <a href="#">Register here</a>
              </p>
            </form>
            <button type="submit" className="btn btn-light mt-3 w-100">
              <FaGoogle style={{ marginRight: "3px", marginTop: "-2px" }} />
              Login With Google
            </button>
          </div>

          {/* Right Side: Image (Hidden on Small & Medium Screens) */}
          <div className="login-image">
            <img src="/login.jpeg" alt="Books" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login