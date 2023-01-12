import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
