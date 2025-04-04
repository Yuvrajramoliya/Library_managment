import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import { FaBookOpen } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    password: "",
    universityID: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, universityID: e.target.files[0] }));
  };

  
  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <div className="form-wrapper d-flex">
        {/* Left Side - Form */}
        <div className="form-section p-4">
          <span className="login-font_book">
            {" "}
            <FaBookOpen style={{ marginRight: "5px", marginTop: "-5px" }} />
            BookWise
          </span>
          <h2 className="mb-3" style={{fontFamily:"'Poppins', sans-serif"}}>Create Your Library Account</h2>
          <form>
            <div className="mb-3">
              <p className="mb-1">Full Name</p>
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <p className="mb-1">Email</p>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <p className="mb-1">University Name</p>
              <input
                type="text"
                name="university"
                className="form-control"
                placeholder="University"
                value={formData.university}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <p className="mb-1">Password</p>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <p className="mb-1">Upload Univercity Id </p>
              <div className="file-upload-container">
                <label className="file-upload-box">
                  <input type="file" hidden />
                  <div className="file-upload-content">
                    <FaCloudUploadAlt className="upload-icon" />
                    <span>Upload a file</span>
                  </div>
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
            <p className="text-center mt-3">
              have an account Already? <a href="#">Login </a>
            </p>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="image-section">
          <img src="/login.jpeg" alt="Books" />
        </div>
      </div>
    </div>
  );
}
