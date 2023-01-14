import React from 'react'; 
import "./landing.scss";
import { Link } from "react-router-dom";

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import landingpic from '../../assets/LandingPic.jpg';

const Landing = () => {
  return (
    <div className="landing">
        <Navbar/>
        <div className="top">
            <div className="left">
                <h1>
                    Launch into your professional career today.
                </h1>
            </div>
            <div className="right">
                <div className="loginbox">
                    <h2>Welcome to Tadpole</h2>    
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>  
                    <h3>Don't have an account?</h3>
                        <button>Register</button>
                </div>  
            </div>
        </div>
        <div className="middle">
            <div className="left">
                <h1>Stand out from the crowd with videos.</h1>
            </div>
            <div className="right">
                <img src = {landingpic}/>
            </div>
            
        </div>
        <div class="bottom">
            <h1>We humanize the professional job world.</h1>
            <table>
                <tr>
                    <th>Show what your resume doesn't.</th>
                    <th>Bypass steps in your interview process.</th>
                </tr>
                <tr>
                    <td>Your resume doesn’t show who you are as a person, your enthusiasm, your 
                        expressions, and so on. We believe that you are more than just a list of job 
                        experiences and that employers deserve to know that just as much as you 
                        deserve to show it.</td>
                    <td>The interview process today is nothing short of a 5+ step process. Tadpole 
                        allows users to help potentially shorten that interview process by giving 
                        employers a more in-depth video view of who you are. </td>
                </tr>
                <tr>
                    <th>Connect with peers.</th>
                    <th>Leap Forward.</th>
                </tr>
                <tr>
                    <td>Tadpole allows you to network with business peers 
                        and build your community in a more versatile way 
                        geared for today’s world. </td>
                    <td>Take the next step in your professional career. Transform. Leap Forward.</td>
                </tr>
            </table>
        </div>
        <Footer/>  
    </div>
  );
};

export default Landing;