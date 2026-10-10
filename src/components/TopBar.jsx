import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { sections } from "../data/content";
import { useTheme } from "../theme";

// Highlights the section currently under the bar
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled) return;
    const els = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
  return enabled ? active : null;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

function TopBar() {
  const { pathname } = useLocation();
  const onSheet = pathname !== "/resume";
  const active = useActiveSection(onSheet);
  const progress = useScrollProgress();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="flex h-14 items-center gap-4 px-4 md:gap-8 md:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-black tracking-tight">
          <span aria-hidden="true" className="relative inline-block h-5 w-7">
            <span className="overprint absolute left-0 top-0 h-5 w-5 rounded-full bg-cyan" />
            <span className="overprint absolute right-0 top-0 h-5 w-5 rounded-full bg-magenta" />
          </span>
          zdienos
        </Link>

        <nav aria-label="Sections" className="min-w-0 flex-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none]">
          <ol className="flex gap-5 md:gap-7">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={{ pathname: "/", hash: `#${id}` }}
                  className={`label whitespace-nowrap py-1 transition-colors hover:text-magenta ${
                    active === id ? "text-magenta" : ""
                  }`}
                  aria-current={active === id ? "true" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <Link
          to="/resume"
          className={`label shrink-0 border-2 border-ink px-2 py-1 transition-colors hover:bg-ink hover:text-paper ${
            pathname === "/resume" ? "bg-ink text-paper" : ""
          }`}
        >
          CV
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="label shrink-0 hover:text-magenta"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "Paper" : "Ink"}
        </button>
      </div>
      <span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-0.5 bg-magenta"
        style={{ width: `${progress * 100}%` }}
      />
    </header>
  );
}

export default TopBar;
