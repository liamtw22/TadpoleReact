import React from 'react'; 
import "./login.scss";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';



const Login = () => {
  return (
    <div className="login">
    <Navbar/>
        <div className="text">
            <h1>Welcome to Tadpole</h1>
        </div>
        <div className="loginbox">   
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>  
            <h3>Don't have an account?</h3>
            <NavLink to="/register" style={{ textDecoration: "none", color: "#008037"}}><button className="register">Register</button></NavLink>
        </div>
        <Footer/>
    </div> 
  );
};
export default Login;