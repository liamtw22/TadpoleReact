import React from 'react'; 
import "./leftbar.scss";
import { NavLink } from 'react-router-dom';

import jobs from '../../assets/jobs.svg';
import messages from '../../assets/messages.svg';
import network from '../../assets/network.svg';
import support from '../../assets/support.svg';


const Leftbar = () => {
  return (
    <div className="leftbar">
        <button>+</button>
        <NavLink to="/home" style={{ textDecoration: "none"}}><img src={jobs}/></NavLink>
        <NavLink to="/home" style={{ textDecoration: "none"}}><img src={messages}/></NavLink>
        <NavLink to="/notifications" style={{ textDecoration: "none"}}><img src={network}/></NavLink>
        <NavLink to="/profile" style={{ textDecoration: "none"}}><img src={support}/></NavLink>
        <h3>©Tadpole, Inc. 2022.<br/>Leap Forward.</h3>
    </div>
  );
};
export default Leftbar;