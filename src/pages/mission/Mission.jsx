import React from 'react'; 
import "./mission.scss";
import { Link } from 'react-router-dom';

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import missionimg from '../../assets/missionimg.jpg';


const Mission = () => {
  return (
    <div className="mission">
        <Navbar/>
        <div className="body">
            <h1>Our Mission</h1>
            <p> In a world entering the post-covid era, Tadpole seeks to emphasize authenticity 
            and give people from all backgrounds a chance to stand out. We believe there is more to you than just your resume.
            </p>
            <img src={missionimg}/>
        </div>
        <Footer/>
    </div>
  );
};
export default Mission;