import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// public Routes 
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Login from "./layout/Auth/Login";
import Register from "./layout/Auth/Register";
import Premium from "./layout/Premium";
//private Routes
import Dashboard from "./layout/private/Dashboard";
import HomeDash from "./layout/private/HomeDash";
import Player from "./layout/private/Player";
import Search from "./layout/private/Search";
import Library from "./layout/private/Library";


const App = ()=>{
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/pre" element={<Premium/>}/>
        {/* private Routes  */}
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="homeDash" element={<HomeDash/>}/>
          <Route path="player" element={<Player/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="library" element={<Library/>}/>
        </Route>
        
        
      </Routes>
    </Router>
    </>
  )
}

export default App;