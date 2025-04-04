import React from 'react';
import '../navbar/navbar.css';
import { FaBookOpen } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Login from '../login/login';

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark navbar-main navbar-expand-lg navbar-light">
        <div className="container">
          {/* Left: Logo */}
          <a className="navbar-brand text-light" href="#"><FaBookOpen color='white' />&nbsp;BookWise</a>
          
          {/* Mobile Menu Button */}
        <div>
            <button className="search btn d-lg-none btn-outline-light me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasProfile"><FaRegCircleUser /></button>
              <button
            className="navbar-toggler  bg-light "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"   
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
          {/* Center: Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active text-light" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">Book List</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex search-main" role="search">
              <div className="input-container">
                <input placeholder="Enter Book Name" className="input-field" type="text" />
                <span className="input-highlight"></span>
              </div>
            </form>
            <button className="search btn btn-outline-light me-3" type="submit"><FiSearch /></button>
             <button className="search btn btn-outline-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasProfile"><FaRegCircleUser /></button>
          </div>
        </div>
      </nav>
      

      {/* Mobile Sidebar */}
        
      <div className="offcanvas offcanvas-start d-lg-none custom-offcanvas bg-dark text-light" tabIndex="-1" id="offcanvasNavbar">
        <div className="offcanvas-header bg-dark text-light">
          <h5 className="offcanvas-title ms-4">Menu</h5>
          <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
         <ul className="navbar-nav mx-auto mb-0 mb-lg-0">
              <li className="nav-item"><a className="nav-link active text-light ms-4" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-light ms-4" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link text-light ms-4" href="#">Book List</a></li>
              <li className="nav-item"><a className="nav-link text-light ms-4" href="#">Contact</a></li>
            </ul>
           <form className="d-flex justify-content-start search-main" role="search">
              <div className="input-container">
                <input placeholder="Enter Book Name" className="input-field" type="text" />
                <span className="input-highlight"></span>
              </div>
               <button className="search btn btn-outline-light" style={{ height: '40px',marginTop: '30px' }} type="submit"><FiSearch /></button>
            </form>
        </div>
      </div>

      <div className="offcanvas offcanvas-end bg-dark text-light" tabIndex="-1" id="offcanvasProfile">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Profile</h5>
          <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <div className="profile-section text-center">
            <FaRegCircleUser size={80} />
            <h5 className="mt-2">John Doe</h5>
            <p className="text-light">johndoe@example.com</p>
          </div>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light"><a href="#">My Account</a></li>
            <li className="list-group-item bg-dark text-light"><a href="#">Orders</a></li>
            <li className="list-group-item bg-dark text-light"><a href="#">Settings</a></li>
            <li className="list-group-item bg-dark text-light">
              <button className="btn btn-light text-dark w-100">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
