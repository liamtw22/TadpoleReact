import React from 'react'; 
import "./navbar.scss";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Landing from '../../pages/landing/Landing';
import About from '../../pages/about/About';
import Mission from '../../pages/mission/Mission';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';

import logo from '../../assets/Tadpole Logo no Back.png';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <NavLink to="/" style={{ textDecoration: "none", color: "#008037"}}><img src={logo}/></NavLink>
        <NavLink to="/" style={{ textDecoration: "none" , color: "#008037"}}><h3 className="logo">Tadpole</h3></NavLink>
        <NavLink to="/about" style={{ textDecoration: "none", color: "#008037"}}><h3>About</h3></NavLink>
        <NavLink to="/mission" style={{ textDecoration: "none", color: "#008037"}}><h3>Mission</h3></NavLink>
        <h3>Community</h3>
        <h3>Support</h3>
      </div>
      <div className="right">
        <NavLink to="/register" style={{ textDecoration: "none", color: "#008037"}}><button className="fullbox">Join Now</button></NavLink>
        <NavLink to="/login" style={{ textDecoration: "none", color: "#008037"}}><button className="emptybox">Sign In</button></NavLink>
      </div>
    </div>
  );
};
export default Navbar;