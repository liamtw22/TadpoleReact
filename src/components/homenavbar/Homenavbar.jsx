import React from 'react'; 
import "./homenavbar.scss";
import { NavLink } from 'react-router-dom';

import logo from '../../assets/Tadpole Logo no Back.png';
import notification from '../../assets/notification.svg';
import profile from '../../assets/profile.svg';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <NavLink to="/home" style={{ textDecoration: "none", color: "#008037"}}><img src={logo}/></NavLink>
        <NavLink to="/home" style={{ textDecoration: "none" , color: "#008037"}}><h3 className="logo">Tadpole</h3></NavLink>
      </div>
      
      <div className="center">
        <div className="search">
            <input type="text" placeholder="Search"/>
        </div>
      </div>
      
      <div className="right">
        <NavLink to="/notifications" style={{ textDecoration: "none", color: "#008037"}}><img src={notification}/></NavLink>
        <NavLink to="/profile" style={{ textDecoration: "none", color: "#008037"}}><img class="profile" src={profile}/></NavLink>
      </div>
    </div>
  );
};
export default Navbar;