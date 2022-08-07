import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from 'use-local-storage'


import Preloader from "../src/components/Pre";

import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";



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
  
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark':'light';    
    setTheme(newTheme);
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>      
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"} data-theme={theme}> 
      {/* <Suspense fallback={<h1>Still Loading…</h1>}> */}
      <button href="#" className="btn-switch" onClick={switchTheme}>Switch ssssss </button>
      <label>
        <input class='toggle-checkbox' type='checkbox' onClick={switchTheme}></input>
        <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
            <BsFillSunFill className="sun-icon"/>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
            <div class="bi bi-moon"></div>
            <BsFillMoonFill className="moon-icon"/>
          </div>
        </div>
      </label>
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
