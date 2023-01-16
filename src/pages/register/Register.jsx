import React from 'react'; 
import "./register.scss";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


const Register = () => {
  return (
    <div className="register">
    <Navbar/>
        <div className="text">
            <h1>Welcome to Tadpole</h1>
        </div>
        <div className="loginbox">   
            <form>
              <table>
                <tr className="names">
                  <td><input type="text" placeholder="First Name"/></td>
                  <td><input type="text" placeholder="Last Name"/></td>
                </tr>
                <tr>
                  <td colspan="2"><input type="text" placeholder="Username"/></td>
                </tr>
                <tr>
                  <td colspan="2"><input type="password" placeholder="Password"/></td>
                </tr>
              </table>
            <button>Join Now</button>
            </form>  
            <h3>Already have an account?</h3>
            <button className="register">Sign In</button>
        </div>
        <Footer/>
    </div>
  );
};
export default Register;