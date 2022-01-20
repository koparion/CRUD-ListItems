import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Routing from "./components/Routes";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  //main routing is set in App
  const [lockin, setLockin] = useState(false); //preventing page viewing without login
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLockin={setLockin}/>} /> {/* passing blocked page unless logged in*/}
          <Route path="/register" element={<Register />} />
          {lockin && <Route path="/profile" element={<Profile />}/>}
        </Routes>
      </BrowserRouter>
      {/* <Routing/> */}
    </>
  );
}

export default App;
