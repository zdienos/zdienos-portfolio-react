import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Pre";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Footer = lazy(() => import("./components/Footer"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function Main() {
  return (
    <Router>
      <div id="top" className="min-h-screen">
        <Suspense fallback={<Preloader />}>
          <Navbar />
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default Main;
