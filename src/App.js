import Home from "./components/pages/home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Profile from "./profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>  </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile/:username" element={<Profile />} />
        
        </Routes>
      
      </BrowserRouter>

    </>
  );
}

export default App;
