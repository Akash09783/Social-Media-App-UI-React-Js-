import Home from "./components/pages/home/Home";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Profile from "./profile/Profile";

function App() {
  return (
    <>
   
      <HashRouter>
        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route exact path="/" element={<Home />}>  </Route>
         
            <Route path="/register" element={<Register />} />

            <Route path="/profile/:username" element={<Profile />} />
        
        </Routes>
      
      </HashRouter>

    </>
  );
}

export default App;
