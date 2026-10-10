import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import IndexPanel from "./components/IndexPanel";
import GridOverlay from "./components/GridOverlay";
import Colophon from "./components/Colophon";
import Home from "./pages/Home";
import { usePreview } from "./contexts";

const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { pathname } = useLocation();
  const { setPreview } = usePreview();
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPreview(null);
  }, [pathname, setPreview]);

  // "G" toggles the layout grid, like a designer's guides
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() !== "g" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-12">
      <IndexPanel showGrid={showGrid} onToggleGrid={() => setShowGrid((v) => !v)} />

      <main className="min-w-0 lg:col-span-7">
        <Suspense fallback={<p className="meta px-5 py-10 lg:px-8">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Works />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Colophon />
      </main>

      {showGrid && <GridOverlay />}
    </div>
  );
}

export default App;
