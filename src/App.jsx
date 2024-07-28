import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

// public Routes
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Login from "./layout/Auth/Login";
import Register from "./layout/Auth/Register";

// private Routes
import Dashboard from "./layout/private/Dashboard";
import Music from "./layout/private/Music";
import Settings from "./layout/private/Settings";
import ListenTogether from "./layout/private/components/ListenTogether";
import PrivateRoute from "./layout/private/components/PrivateRoute";
import { MusicProvider } from "./context/MusicContext";

const ConditionalNavBar = () => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return <Navbar />;
  } else {
    return null;
  }
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
    <MusicProvider>
    <Router>
      <ConditionalNavBar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* private routes */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
            <Route path="listen-together" element={<ListenTogether />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    </MusicProvider>
    </>
  );
};

export default App;
