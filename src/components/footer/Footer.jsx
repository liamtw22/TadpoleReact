import React from 'react'; 
import "./footer.scss";
import { NavLink } from 'react-router-dom';

import Landing from '../../pages/landing/Landing';
import About from '../../pages/about/About';
import Mission from '../../pages/mission/Mission';

import logo from '../../assets/Tadpole Logo no Back.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="left">
          <h3><NavLink to="/about" style={{ textDecoration: "none", color: "#008037"}}>About</NavLink></h3> 
          <h3>Community</h3> 
          <h3>Careers</h3> 
        </div>
        <div className="center">
          <NavLink to="/" style={{ textDecoration: "none", color: "#008037"}}><img src={logo}/></NavLink>
          <h3><NavLink to="/" style={{ textDecoration: "none", color: "#008037"}}>Tadpole</NavLink></h3>
        </div>
        <div className="right">
          <h3>Support</h3> 
          <h3><NavLink to="/contact" style={{ textDecoration: "none", color: "#008037"}}>Contact Us</NavLink></h3>
          <h3><NavLink to="/mission" style={{ textDecoration: "none", color: "#008037"}}>Mission</NavLink></h3>
        </div>
      </div>
      
      <div className="tag">
        <h3>©Tadpole, Inc. 2022. Leap Forward.</h3>
      </div>
    </div>
  );
};

export default Footer;