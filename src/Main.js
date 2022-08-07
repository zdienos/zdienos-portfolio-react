import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Preloader from "../src/components/Pre";

import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";


//import Navbar from "./components/Navbar";
const Navbar  = lazy(() => import("./components/Navbar"));
// import Home from "./components/Home/Home";
const Home  = lazy(() => import("./components/Home/Home"));
// import About from "./components/About/About";
const About  = lazy(() => import("./components/About/About"));
// import Projects from "./components/Projects/Projects";
const Projects  = lazy(() => import("./components/Projects/Projects"));
// import Footer from "./components/Footer";
const Footer  = lazy(() => import("./components/Footer"));
// import Resume from "./components/Resume/Resume";
const Resume  = lazy(() => import("./components/Resume/Resume"));
// import ScrollToTop from "./components/ScrollToTop";
const ScrollToTop  = lazy(() => import("./components/ScrollToTop"));




function Main() {  
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>  
      {/* <Suspense fallback={<h1>Still Loading…</h1>}> */}
      <Suspense fallback={<Preloader />}> <Navbar /> </Suspense>
      <Suspense fallback={<Preloader />}>   <ScrollToTop /> </Suspense>
      <Suspense fallback={<Preloader />}>  
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/project" element={<Projects />} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/resume" element={<Resume/>} /> 
        </Routes>
        </Suspense>
        <Suspense fallback={<Preloader />}> <Footer /> </Suspense>
      
        
      </div>
    </Router>
  );
}

export default Main;
