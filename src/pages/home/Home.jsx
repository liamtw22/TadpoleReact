import React from 'react'; 
import "./home.scss";

import Homenavbar from '../../components/homenavbar/Homenavbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Posts from '../../components/posts/Posts';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
  return (
    <div className="home">
        <Homenavbar/>
        <div className="body">
            <Leftbar/>
            <Posts/>
            <Rightbar/>
        </div>
    </div>
  );
};

export default Home;