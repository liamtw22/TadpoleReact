import "./navbar.scss";
import { Link } from 'react-router-dom';
import Landing from "../../pages/landing/Landing";

const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <li className="logo">Tadpole</li>
            <li>About</li>
            <li>Mission</li>
            <li>Community</li>
            <li>Support</li>
            <li className="fullbox">Join Now</li>
            <li className="emptybox">Sign In</li>
        </ul>
        
    </div>
  );
};
export default Navbar;