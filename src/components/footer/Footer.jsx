import React from 'react'; 
import "./footer.scss";
import { Link } from 'react-router-dom';

import Landing from '../../pages/landing/Landing';
import About from '../../pages/about/About';

const Footer = () => {
  return (
    <div className="footer">
        <table>
            <tr>
                <td>About</td> 
                <td>Community</td> 
                <td>Careers</td> 
                <td className="logo">Tadpole</td> 
                <td>Support</td> 
                <td>Contact Us</td>
                <td>Mission</td>
            </tr>
        </table>
        <hr/>
        <h3>©Tadpole, Inc. 2022. Leap Forward.</h3>
    </div>
  );
};

export default Footer;