import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import TopBar from "./components/TopBar";
import Sheet from "./pages/Sheet";
import { routeToSection } from "./data/content";

const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

const YEAR = new Date().getFullYear();

function App() {
  const { pathname, hash } = useLocation();

  // Separate pages start at the top; the sheet handles its own anchors
  useEffect(() => {
    if (!hash && !routeToSection[pathname]) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main"
        className="label sr-only z-50 bg-ink px-3 py-2 text-paper focus:not-sr-only focus:fixed focus:left-2 focus:top-2"
      >
        Skip to content
      </a>
      <TopBar />
      <main id="main">
        <Suspense fallback={<p className="label px-6 py-16 text-soft">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Sheet hash={hash} />} />
            <Route path="/about" element={<Sheet section={routeToSection["/about"]} />} />
            <Route path="/project" element={<Sheet section={routeToSection["/project"]} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="label flex flex-wrap justify-between gap-4 px-4 py-6 text-soft md:px-6">
        <span>© {YEAR} zdienos — printed in two inks on a browser</span>
        <span>React 19 · Tailwind CSS 4 · Schibsted Grotesk</span>
      </footer>
    </>
  );
}

export default App;
