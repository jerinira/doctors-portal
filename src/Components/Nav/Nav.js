import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="">
        About
      </Link>
      <Link className="nav-item" to="">
        Dental Services
      </Link>
      <Link className="nav-item" to="">
        Reviews
      </Link>
      <Link className="nav-item" to="">
        Blog
      </Link>
      <Link className="nav-item" to="">
        Contact Us
      </Link>
      <Link className="nav-item" to="/doctor/AllAppointments">
        Doctor's Login
      </Link>
      
    </div>
    );
};

export default Nav;