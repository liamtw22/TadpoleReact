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
        <ul>
        <li><NavLink to="/home" style={{ textDecoration: "none", color: "#008037"}}><img src={jobs}/></NavLink></li>
        <li><NavLink to="/home" style={{ textDecoration: "none" , color: "#008037"}}><img src={messages}/></NavLink></li>
        <li><NavLink to="/notifications" style={{ textDecoration: "none", color: "#008037"}}><img src={network}/></NavLink></li>
        <li><NavLink to="/profile" style={{ textDecoration: "none", color: "#008037"}}><img src={support}/></NavLink></li>
        <li><h3>©Tadpole, Inc. 2022.<br/>Leap Forward.</h3></li>
        </ul>
    </div>
  );
};
export default Leftbar;