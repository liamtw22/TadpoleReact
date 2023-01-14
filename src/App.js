import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul> */}
        <Routes>
          <Route exact path='/' element={< Landing />}></Route>
          <Route exact path='/about' element={< About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
