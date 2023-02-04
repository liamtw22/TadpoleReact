import React from 'react'; 
import "./contact.scss";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


const Contact = () => {
  return (
    <div className="contact">
    <Navbar/>
        <div className="text">
            <h1>How Can We Help?</h1>
        </div>
        <div className="contactbox">   
            <form>
              <table>
                <tr className="names">
                  <td><input type="text" placeholder="First Name"/></td>
                  <td><input type="text" placeholder="Last Name"/></td>
                </tr>
                <tr>
                  <td colspan="2"><input type="text" placeholder="Email Address"/></td>
                </tr>
                <tr>
                  <td colspan="2"><input class="message" type="password" placeholder="Message"/></td>
                </tr>
              </table>
            <button>Send</button>
            </form>  
        </div>
        <Footer/>
    </div>
  );
};
export default Contact;