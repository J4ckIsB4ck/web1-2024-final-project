import React from 'react';
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<AboutUs />}/>
        <Route path = "/blog" element = {<Blog />}/> 
      </Routes>
    </Box>
  );
}

export default App;

