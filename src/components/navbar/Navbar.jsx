import React from 'react'; 
import "./navbar.scss";
import { Link } from 'react-router-dom';

import Landing from '../../pages/landing/Landing';
import About from '../../pages/about/About';

import logo from '../../assets/Tadpole Logo no Back.png';


const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <li className="logopic"><Link to="/"><img src={logo}/></Link></li>
            <li className="logo"><Link to="/">Tadpole</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Mission</li>
            <li>Community</li>
            <li>Support</li>
            <li className="fullbox">Join Now</li>
            <li className="emptybox">Sign In</li>
        </ul>
        
    </div>
  );
};
export default Navbar;