import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// public Routes
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Login from "./layout/Auth/Login";
import Register from "./layout/Auth/Register";

// private Routes
import Dashboard from "./layout/private/Dashboard";


import { useLocation } from "react-router-dom";
import Music from "./layout/private/Music";
import Settings from "./layout/private/Settings";

const ConditionalNavBar = () => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/pre"
  ) {
    return <Navbar />;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <Router>
      <ConditionalNavBar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
 
        {/* private routes */}
        <Route element={<Dashboard/>}>
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<Settings />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
