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
import Mission from "./pages/mission/Mission";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={< Landing />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/mission' element={< Mission />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
