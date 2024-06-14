import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// public Routes 
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Login from "./layout/Auth/Login";
import Register from "./layout/Auth/Register";
import Premium from "./layout/Premium";
//private Routes


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
        
        
      </Routes>
    </Router>
    </>
  )
}

export default App;