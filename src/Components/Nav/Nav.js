import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-item" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </Link>
      <Link className="nav-item" to="" style={{ textDecoration: 'none', color: 'inherit' }}>
        About
      </Link>
      <Link className="nav-item" to="" style={{ textDecoration: 'none', color: 'inherit' }}>
        Dental Services
      </Link>
      <Link className="nav-item" to="" style={{ textDecoration: 'none', color: 'inherit' }}>
        Reviews
      </Link>
      <Link className="nav-item" to="" style={{ textDecoration: 'none', color: 'inherit' }}>
        Blog
      </Link>
      <Link className="nav-item" to="" style={{ textDecoration: 'none', color: 'inherit' }}>
        Contact Us
      </Link>
      <Link className="nav-item" to="/doctor/patientList" style={{ textDecoration: 'none', color: 'inherit' }}>
        Doctor's Login
      </Link>

    </div>
  );
};

export default Nav;