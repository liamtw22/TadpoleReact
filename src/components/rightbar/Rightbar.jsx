import React from 'react'; 
import "./rightbar.scss";
import { NavLink } from 'react-router-dom';

import mousa from '../../assets/Mousa.jpg';
import liam from '../../assets/Liam.jpg';

const Rightbar = () => {
  return (
    <div className="rightbar">
        <div className="trending">
           <h2>Trending</h2> 
           <h3>#Transparency</h3>
           <h3>#Tadpoleisthefuture</h3>
           <h3>#Tadpoleisthefuture</h3>
           <h3>#Tadpoleisthefuture</h3>
           <h3>#Tadpoleisthefuture</h3>
           <h3>#Tadpoleisthefuture</h3>
        </div>

        <div className="suggested">
           <h2>Suggested Connections</h2> 
           <div className="person">
              <img src={mousa}/>
              <h3>Mousa Adely</h3>
            </div>
            <div className="person">
              <img src={liam}/>
              <h3>Liam Walsh</h3>
            </div>
            <div className="person">
              <img src={mousa}/>
              <h3>Mousa Adely</h3>
            </div>
            <div className="person">
              <img src={liam}/>
              <h3>Liam Walsh</h3>
            </div>
            <div className="person">
              <img src={mousa}/>
              <h3>Mousa Adely</h3>
            </div>
            <div className="person">
              <img src={liam}/>
              <h3>Liam Walsh</h3>
            </div>
        </div>

        <div className="note">
           <h2>Mobile app coming soon!
            <br/>Share Tadpole with Friends
            <br/>Build your pool of connections today</h2>  
        </div>


    </div>
  );
};
export default Rightbar;