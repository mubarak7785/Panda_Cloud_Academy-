import { useState } from "react";
import  Navbar  from './Components/Navbar/Navbar';

import { Routes,Route } from "react-router-dom";

import { Signup } from "./Components/Signup/Signup";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Container } from "@mui/material"; // Import Container for layout
import { Contact } from "./Components/Contact/Contact";
import { About } from "./Components/About/About";
function App() {
  return (
    <>
      <Navbar/>
    
      <Container sx={{ paddingTop: '64px' }}> {/* Adjust padding based on Navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
    
     
    </>
  );
}

export default App;
