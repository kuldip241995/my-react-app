import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import images from '../../assets/images';
import icons from '../../assets/icons';

const Navbar = () => {

  const handleProfileClick = () => {
    alert('Profile clicked!');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search handling logic here
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={images.imgAppLogo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <NavLink to="/home" className="navbar-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/about" className="navbar-link" activeClassName="active-link">Menu</NavLink>
        <NavLink to="/services" className="navbar-link" activeClassName="active-link">Offers</NavLink>
        <NavLink to="/contact" className="navbar-link" activeClassName="active-link">Service</NavLink>
        <NavLink to="/contact" className="navbar-link" activeClassName="active-link">About Us</NavLink>
      </div>
      <div className="navbar-right">
        <img 
          onClick={handleSearch} 
          src={icons.icSearch} 
          alt="Search" 
          className="search-icon" 
        />
        <img
          src={icons.icDummyProfile}
          alt="Profile"
          className="navbar-profile"
          onClick={handleProfileClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
