import React from 'react'; 
import "./profile.scss";
import { NavLink } from 'react-router-dom';

import Homenavbar from '../../components/homenavbar/Homenavbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
  return (
    <div className="profile">
      <Homenavbar/>
        <div className="body">
            <Leftbar/>
              
            <Rightbar/>
        </div>
    </div>
  );
};

export default Profile;